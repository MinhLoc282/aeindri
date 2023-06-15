import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { actionCreateBrand } from 'store/actions';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import smile from 'assets/icons/smile.png';

import './Create.scss';

function Create() {
  const dispatch = useDispatch();

  const loadingState = useSelector((state) => state.Brands.loading);

  const [loadingUploadImg, setLoadingUploadImg] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: '',
      company: '',
      description: '',
      image: null,
      email: '',
      infor: '',
      walletAddress: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Brand name is required.'),

      company: Yup.string()
        .required('Company is required.'),

      description: Yup.string()
        .required('Description is required.'),

      image: Yup.mixed()
        .required('Image is required.'),

      email: Yup.string()
        .required('Email is is required.'),

      infor: Yup.string()
        .required('Infomation is required.'),

      walletAddress: Yup.string()
        .required('Wallet address is required.'),
    }),

    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('company', values.company);
        formData.append('description', values.description);
        formData.append('image', values.image);
        formData.append('email', values.email);
        formData.append('addressAndContactInfo', values.infor);
        formData.append('walletAddress', values.walletAddress);

        dispatch(actionCreateBrand(formData));
      } catch (error) {
        toast.error('Error occurred while creating the brand.');
      }
    },
  });

  const onChangeImg = async (e) => {
    setLoadingUploadImg(true);

    await validation.setFieldValue('image', e.target.files[0]);
    setSelectedFile(e.target.files[0]);

    setLoadingUploadImg(false);
  };

  return (
    <div className="add-collection">
      <form onSubmit={validation.handleSubmit} className="add-collection__wrapper">
        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Name
            <code>*</code>
          </div>

          <input
            type="text"
            name="name"
            className="input-text"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.name}
          />
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Company
            <code>*</code>
          </div>

          <input
            type="text"
            name="company"
            className="input-text"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.company}
          />
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Description
            <code>*</code>
          </div>

          <div className="sub-title">
            Describe your brand values e.g. sustainability, carbon negativity, ESG etc
          </div>

          <textarea
            id="w3review"
            name="description"
            rows="10"
            className="input-text-area"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.description}
          />
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Logo
            <code>*</code>
          </div>

          <div className="sub-title">
            This image will be used for navigation. Jpg or png recommended
          </div>

          <input type="file" id="file" onChange={onChangeImg} />

          {loadingUploadImg ? (
            <span className="input-file-loading">
              <i className="fa-solid fa-spinner loading" />
            </span>
          ) : (
            <label htmlFor="file" className="input-file">
              {selectedFile ? (
                <img src={URL.createObjectURL(selectedFile)} alt="logo" />
              ) : (
                <div className="smile">
                  Logo
                  <img src={smile} alt="smile" />
                </div>
              )}
            </label>
          )}
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Email Address
            <code>*</code>
          </div>

          <input
            type="text"
            name="email"
            className="input-text"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.email}
          />
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Address And Contact Infor
            <code>*</code>
          </div>

          <input
            type="text"
            name="infor"
            className="input-text"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.infor}
          />
        </div>

        <div className="add-collection__wrapper--form-control">
          <div className="title">
            Wallet Address
            <code>*</code>
          </div>

          <input
            type="text"
            name="walletAddress"
            className="input-text"
            placeholder="Example: HumuTech"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            value={validation.values.walletAddress}
          />
        </div>

        <button
          type="submit"
          className="btn-submit"
          disabled={loadingState || loadingUploadImg}
        >
          {loadingState || loadingUploadImg ? <i className="fa-solid fa-spinner loading" /> : 'CREATE'}
        </button>
      </form>
    </div>
  );
}

Create.propTypes = {

};

export default Create;
