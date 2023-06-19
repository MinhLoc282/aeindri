import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { actionApproveCollection, actionDeclineCollection } from 'store/actions';

import styles from './CollectionAdmin.module.scss';

function Brand(props) {
  const {
    id, collectionName, description, images, artistName, approved,
  } = props;

  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApprove = () => {
    setLoading(true);
    dispatch(actionApproveCollection(id));
  };

  const handleDecline = () => {
    setLoading(true);
    dispatch(actionDeclineCollection(id));
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 600);
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.Container}>
      {isMobile ? (
        <div className={styles.InfoContainer}>
          {images?.length > 0
            && <img src={images[0].image} alt={collectionName} className={styles.Image} />}

          <div>
            <div className={styles.Name}>
              {collectionName}
            </div>

            <div className={styles.Description}>
              {artistName}
            </div>

            <div className={styles.Url}>
              {description.length > 25 ? `${description.slice(0, 25)}...` : description}
            </div>
          </div>
        </div>
      ) : (
        <>
          {images?.length > 0
            && <img src={images[0].image} alt={collectionName} className={styles.Image} />}

          <div>
            <div className={styles.Name}>
              {collectionName}
            </div>

            <div className={styles.Description}>
              {artistName}
            </div>
          </div>

          <div className={styles.Url}>
            {description.length > 25 ? `${description.slice(0, 25)}...` : description}
          </div>
        </>
      )}

      {approved
        ? <div className={styles.Status}>Completed</div>
        : (
          <div className={styles.ButtonContainer}>
            {loading ? (
              <div className={styles.CircleLoader} />
            ) : (
              <>
                <button type="button" className={styles.Accept} onClick={handleApprove}>
                  <span className={styles.ButtonText}>Accept</span>
                </button>

                <button type="button" className={styles.Decline} onClick={handleDecline}>
                  <span className={styles.ButtonText}>Decline</span>
                </button>
              </>
            )}
          </div>
        )}

      <span className={styles.Close}>
        &times;
      </span>
    </div>
  );
}

Brand.propTypes = {
  id: PropTypes.string.isRequired,
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
