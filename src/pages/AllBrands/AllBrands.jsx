import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AllBrands.module.scss';

function AllBrands() {
  return (
    <div className={styles.Brand}>
      <Link to="create-brand" className={styles.Btn}>Create brand</Link>
      {/* <div className={styles.BrandItems}>
        Item
      </div> */}
    </div>
  );
}

export default AllBrands;
