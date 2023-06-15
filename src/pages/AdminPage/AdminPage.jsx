import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllBrands, actionGetAllCollections } from 'store/actions';

import Brand from 'components/BrandAdmin/BrandAdmin';
// import Collection from 'components/CollectionAdmin/CollectionAdmin';
import Collection from 'components/CollectionUser/CollectionUser';

import styles from './AdminPage.module.scss';

function AdminPage() {
  const dispatch = useDispatch();
  const brandsData = useSelector((state) => state.Brands);
  const collectionsData = useSelector((state) => state.Collections);

  useEffect(() => {
    dispatch(actionGetAllBrands());
    dispatch(actionGetAllCollections());
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <div className={styles.Header}>
          <span className={styles.Line} />

          Recent Brands
        </div>

        {brandsData.brands.map((brand) => (
          <Brand
            key={brand._id}
            id={brand._id}
            name={brand.name}
            company={brand.company}
            description={brand.description}
            image={brand.image}
            email={brand.email}
            addressAndContactInfo={brand.addressAndContactInfo}
            walletAddress={brand.walletAddress}
            approved={brand.approved}
          />
        ))}

        <div className={styles.Header}>
          <span className={styles.Line} />

          Recent Collections
        </div>

        {collectionsData.collections.map((collection) => (
          <Collection
            key={collection._id}
            id={collection._id}
            collectionName={collection.collectionName}
            artistName={collection.artistName}
            description={collection.description}
            image={collection.image}
            approved={collection.approved}
          />
        ))}
      </div>
    </div>
  );
}
export default AdminPage;
