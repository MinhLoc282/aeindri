import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useWeb3 from 'hooks/useWeb3';
import { actionUpdateCollectionAddress } from 'store/actions';
import styles from './CollectionUser.module.scss';

function Brand(props) {
  const {
    id,
    collectionName,
    description,
    images,
    artistName,
    approved,
    collectionAddress,
  } = props;

  const { deployContract, mintToken } = useWeb3();
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const modalRef = useRef(null);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDeployClick = async () => {
    setLoading(true);

    try {
      const deployedCollectionAddress = await deployContract(
        collectionName,
        collectionName.substr(0, 3),
        collectionName,
        description,
        images,
      );

      dispatch(actionUpdateCollectionAddress({ id, collectionAddress: deployedCollectionAddress }));
    } catch (error) {
      console.error('Deploy failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMintClick = async () => {
    setLoading(true);

    try {
      await mintToken({
        numberOfTokens: images.length,
        collectionAddress,
      });
    } catch (error) {
      console.error('Minting failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContainerClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 600);
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  useEffect(() => {
    // Preload the images when the component mounts or when the images array changes
    const preloaded = images.map((img) => {
      const imageElement = new Image();
      imageElement.src = img.image;
      return imageElement;
    });

    setPreloadedImages(preloaded);
  }, [images]);

  return (
    <>
      <button type="button" className={styles.Container} onClick={handleContainerClick}>
        {isMobile ? (
          <div className={styles.InfoContainer}>
            {images?.length > 0
            && (
            <img
              src={images[0].image}
              alt={collectionName}
              className={styles.Image}
            />
            )}

            <div>
              <div className={styles.Name}>{collectionName}</div>

              <div className={styles.Description}>{artistName}</div>

              <div className={styles.Url}>
                {description.length > 25 ? `${description.slice(0, 25)}...` : description}
              </div>
            </div>
          </div>
        ) : (
          <>
            {images?.length > 0
            && (
            <img
              src={images[0].image}
              alt={collectionName}
              className={styles.Image}
            />
            )}

            <div>
              <div className={styles.Name}>{collectionName}</div>

              <div className={styles.Description}>{artistName}</div>
            </div>

            <div className={styles.Url}>
              {description.length > 25 ? `${description.slice(0, 25)}...` : description}
            </div>
          </>
        )}

        {approved
          ? <div className={styles.Status}>Completed</div>
          : <div className={styles.Status1}>In progress</div>}

        <span className={styles.Close}>&times;</span>
      </button>

      {isModalOpen && (
        <div className={styles.Modal}>
          <div className={styles.ModalContent} ref={modalRef}>
            <button type="button" className={styles.CloseButton} onClick={closeModal}>
              &times;
            </button>

            <div className={styles.ImageContainer}>
              {images.length > 1 && (
                <button type="button" className={styles.NavigationButtonLeft} onClick={handlePreviousImage}>
                  &lt;
                </button>
              )}

              <img
                src={preloadedImages[currentImageIndex]?.src}
                alt={collectionName}
                className={styles.ModalImage}
              />

              {images.length > 1 && (
                <button type="button" className={styles.NavigationButtonRight} onClick={handleNextImage}>
                  &gt;
                </button>
              )}
            </div>

            {collectionAddress === '' ? (
              <button type="button" className={`${styles.MintButton} ${!approved && styles.BanClick}`} onClick={handleDeployClick} disabled={!approved}>
                {loading ? <i className="fa-solid fa-spinner loading" /> : 'Deploy'}
              </button>
            ) : (
              <button type="button" className={`${styles.MintButton} ${!approved && styles.BanClick}`} onClick={handleMintClick} disabled={!approved}>
                {loading ? <i className="fa-solid fa-spinner loading" /> : 'Mint'}
              </button>
            )}

          </div>
        </div>
      )}
    </>
  );
}

Brand.propTypes = {
  id: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      cloudinary_id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  approved: PropTypes.bool.isRequired,
  collectionAddress: PropTypes.string.isRequired,
};

export default Brand;
