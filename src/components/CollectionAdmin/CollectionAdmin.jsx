import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { actionApproveCollection, actionDeclineCollection } from 'store/actions';

import styles from './CollectionAdmin.module.scss';

function Brand(props) {
  const {
    id, collectionName, description, image, artistName, approved,
  } = props;

  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  const handleApprove = () => {
    dispatch(actionApproveCollection(id));
  };

  const handleDecline = () => {
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
          <img src={image} alt={collectionName} className={styles.Image} />

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
          <img src={image} alt={collectionName} className={styles.Image} />

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
          <div className={styles.ButtonContainer}>
            <button type="button" className={styles.Accept} onClick={handleApprove}>
              <span className={styles.ButtonText}>Accept</span>
            </button>

            <button type="button" className={styles.Decline} onClick={handleDecline}>
              <span className={styles.ButtonText}>Decline</span>
            </button>
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
  image: PropTypes.string.isRequired,
  approved: PropTypes.bool.isRequired,
};

export default Brand;
