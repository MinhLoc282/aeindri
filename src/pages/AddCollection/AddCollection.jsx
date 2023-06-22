import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { v4 as uuidv4 } from 'uuid';

import { actionCreateCollection } from 'store/actions';

import mediaAPI from 'apis/media/mediaAPI';

import useWeb3 from 'hooks/useWeb3';

import smile from 'assets/icons/smile.png';

import './AddCollection.scss';

function AddCollection() {
  const { wallet, connect } = useWeb3();

  const dispatch = useDispatch();

  const loadingState = useSelector((state) => state.Collections.loading);

  const [loadingUploadImg, setLoadingUploadImg] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      collectionName: '',
      description: '',
      artistName: '',
      images: [],
    },

    validationSchema: Yup.object({
      collectionName: Yup.string().required('Collection name is required.'),
      description: Yup.string().required('Description is required.'),
      artistName: Yup.string().required('Artist name is required.'),
      images: Yup.array().min(1).required('At least one image is required.'),
    }),

    onSubmit: async (values) => {
      try {
        dispatch(actionCreateCollection({
          collectionName: values.collectionName,
          description: values.description,
          artistName: values.artistName,
          images: values.images,
          brand: wallet.address,
        }));
      } catch (error) {
        toast.error('Error occurred while creating the collection.');
      }
    },
  });

  const onChangeImg = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const removeImage = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    setSelectedFiles((prevSelectedFiles) => {
      const updatedFiles = [...prevSelectedFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFiles.length > 0) {
      try {
        setLoadingUploadImg(true);

        const uploadPromises = selectedFiles.map(async (file) => {
          const formData = new FormData();
          formData.append('image', file);

          try {
            const response = await mediaAPI.uploadImage(formData);
            if (response && response.data) {
              return response.data;
            }
            throw new Error('Error occurred while uploading an image.');
          } catch (error) {
            throw new Error('Error occurred while uploading an image.');
          }
        });

        const uploadedImages = await Promise.all(uploadPromises);

        await validation.setFieldValue('images', uploadedImages);

        if (wallet.address === '') {
          await connect();
        }

        await validation.handleSubmit();

        setLoadingUploadImg(false);
      } catch (error) {
        setLoadingUploadImg(false);
        toast.error('Error occurred while uploading images.');
      }
    } else {
      toast.error('Please select at least one image for the collection.');
    }
  };

  return (
    <div className="add-collection">
      <div className="add-collection__wrapper">
        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Collection Name
            <code>*</code>
          </div>

          <input
            type="text"
            name="collectionName"
            className="input-text"
            placeholder="Example: My Collection"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.collectionName}
          />
          {validation.touched.collectionName && validation.errors.collectionName && (
            <div className="error-message">{validation.errors.collectionName}</div>
          )}
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Description
            <code>*</code>
          </div>

          <textarea
            name="description"
            rows="10"
            className="input-text-area"
            placeholder="Describe your collection..."
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.description}
          />
          {validation.touched.description && validation.errors.description && (
            <div className="error-message">{validation.errors.description}</div>
          )}
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Artist Name
            <code>*</code>
          </div>

          <input
            type="text"
            name="artistName"
            className="input-text"
            placeholder="Enter the artist name"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.artistName}
          />
          {validation.touched.artistName && validation.errors.artistName && (
            <div className="error-message">{validation.errors.artistName}</div>
          )}
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Image
            <code>*</code>
          </div>

          <div className="sub-title">
            This image will be used for the collection.
          </div>

          <input type="file" id="file" onChange={onChangeImg} multiple />

          <label htmlFor="file" className="input-file">
            {selectedFiles.length > 0 ? (
              selectedFiles.map((file, index) => (
                <div key={uuidv4()} className="selected-file">
                  <img src={URL.createObjectURL(file)} alt="" />
                  <button
                    type="button"
                    className="remove-image"
                    onClick={(e) => removeImage(index, e)}
                  >
                    &times;
                  </button>
                </div>
              ))
            ) : (
              <div className="smile">
                Collection Images
                <img src={smile} alt="smile" />
              </div>
            )}
          </label>
          {validation.touched.images && validation.errors.images && (
            <div className="error-message">{validation.errors.images}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn-submit"
          onClick={handleSubmit}
          disabled={loadingState || loadingUploadImg}
        >
          {loadingState || loadingUploadImg ? (
            <i className="fa-solid fa-spinner loading" />
          ) : (
            'CREATE'
          )}
        </button>
      </div>
    </div>
  );
}

export default AddCollection;
