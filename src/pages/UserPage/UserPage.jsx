import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetUserBrand, actionGetUserCollections } from 'store/actions';

import useWeb3 from 'hooks/useWeb3';

import BrandUser from 'components/BrandUser/BrandUser';
import CollectionUser from 'components/CollectionUser/CollectionUser';

import styles from './UserPage.module.scss';

function UserPage() {
  const { wallet, connect } = useWeb3();
  const dispatch = useDispatch();
  const brandsData = useSelector((state) => state.Brands);
  const collectionsData = useSelector((state) => state.Collections);

  useEffect(() => {
    if (wallet.address) {
      dispatch(actionGetUserBrand(wallet?.address));
      dispatch(actionGetUserCollections(wallet?.address));
    }
  }, [wallet]);

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.InnerContainer}>
        <div className={styles.Header}>
          <span className={styles.Line} />

          Recent Brands
        </div>

        {brandsData.brands.map((brand) => (
          brand !== undefined
          && (
          <BrandUser
            key={brand._id}
            name={brand.name}
            company={brand.company}
            description={brand.description}
            image={brand.image}
            email={brand.email}
            addressAndContactInfo={brand.addressAndContactInfo}
            walletAddress={brand.walletAddress}
            approved={brand.approved}
          />
          )
        ))}

        <div className={styles.Header}>
          <span className={styles.Line} />

          Recent Collections
        </div>

        {collectionsData.collections.map((collection) => (
          <CollectionUser
            key={collection._id}
            id={collection._id}
            collectionName={collection.collectionName}
            artistName={collection.artistName}
            description={collection.description}
            images={collection.images}
            approved={collection.approved}
            collectionAddress={collection.collectionAddress}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPage;
