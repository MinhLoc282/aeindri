import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import PropTypes from 'prop-types';

import useWeb3 from 'hooks/useWeb3';

import styles from './CollectionUser.module.scss';

function Brand(props) {
  const {
    collectionName, description, images, artistName, approved,
  } = props;

  const { deployContract } = useWeb3();

  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const modalRef = useRef(null);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMintClick = () => {
    deployContract(
      collectionName,
      collectionName.substr(0, 3),
      collectionName,
      description,
      images,
    );
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

  return (
    <>
      <button type="button" className={styles.Container} onClick={handleContainerClick}>
        {isMobile ? (
          <div className={styles.InfoContainer}>
            <img src={images[0]?.image} alt={collectionName} className={styles.Image} />

            <div>
              <div className={styles.Name}>
                {collectionName}
              </div>

              <div className={styles.Description}>
                {artistName}
              </div>

              <div className={styles.Url}>
                {description}
              </div>
            </div>
          </div>
        ) : (
          <>
            <img src={images[0]?.image} alt={collectionName} className={styles.Image} />

            <div>
              <div className={styles.Name}>
                {collectionName}
              </div>

              <div className={styles.Description}>
                {artistName}
              </div>
            </div>

            <div className={styles.Url}>
              {description}
            </div>
          </>
        )}

        {approved
          ? <div className={styles.Status}>Completed</div>
          : (
            <div className={styles.Status1}>In progress</div>
          )}

        <span className={styles.Close}>
          &times;
        </span>
      </button>

      {isModalOpen && (
      <div className={styles.Modal}>
        <div className={styles.ModalContent} ref={modalRef}>
          <button type="button" className={styles.CloseButton} onClick={closeModal}>
            &times;
          </button>
          <div className={styles.ImageContainer}>
            <button type="button" className={styles.NavigationButtonLeft} onClick={handlePreviousImage}>
              &lt;
            </button>
            <img
              src={images[currentImageIndex]?.image}
              alt={collectionName}
              className={styles.ModalImage}
            />
            <button type="button" className={styles.NavigationButtonRight} onClick={handleNextImage}>
              &gt;
            </button>
          </div>
          <button type="button" className={styles.MintButton} onClick={handleMintClick}>
            Mint
          </button>
        </div>
      </div>
      )}
    </>
  );
}

Brand.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    cloudinary_id: PropTypes.string.isRequired,
  })).isRequired,
  approved: PropTypes.bool.isRequired,
};

export default Brand;
