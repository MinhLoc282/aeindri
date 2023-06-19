import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './BrandUser.module.scss';

function Brand(props) {
  const {
    name, company, description, image, email, addressAndContactInfo, walletAddress, approved,
  } = props;

  console.log(email, addressAndContactInfo, walletAddress, description);

  const [isMobile, setIsMobile] = useState(false);

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
          <img src={image} alt={name} className={styles.Image} />

          <div>
            <div className={styles.Name}>
              {name}
            </div>

            <div className={styles.Description}>
              {company}
            </div>

            <div className={styles.Url}>
              {description.length > 25 ? `${description.slice(0, 25)}...` : description}
            </div>
          </div>
        </div>
      ) : (
        <>
          <img src={image} alt={name} className={styles.Image} />

          <div>
            <div className={styles.Name}>
              {name}
            </div>

            <div className={styles.Description}>
              {company}
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
          <div className={styles.Status1}>In progress</div>
        )}

      <span className={styles.Close}>
        &times;
      </span>
    </div>
  );
}

Brand.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  addressAndContactInfo: PropTypes.string.isRequired,
  walletAddress: PropTypes.string.isRequired,
  approved: PropTypes.bool.isRequired,
};

export default Brand;
