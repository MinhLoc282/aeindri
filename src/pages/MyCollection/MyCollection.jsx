/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useWeb3 from 'hooks/useWeb3';
import useAlchemy from 'hooks/useAlchemy';

import CardNFT from 'components/CardNFT';

import './MyCollection.scss';
import { actionGetMyCollection } from 'store/actions';

function MyCollection() {
  const { wallet, connect } = useWeb3();

  const dispatch = useDispatch();
  const myCollectionData = useSelector((state) => state.Collections);

  useEffect(() => {
    if (wallet.address) {
      dispatch(actionGetMyCollection(wallet.address));
    }
  }, [wallet]);

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="nft">
      <div className="nft--item">
        {myCollectionData && myCollectionData.collections.map(
          (item) => (
            <CardNFT
              key={item.tokenId}
              item={item}
              isMyNFT
            />
          ),
        )}
      </div>
    </div>
  );
}

export default MyCollection;
