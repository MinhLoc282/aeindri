/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import useWeb3 from 'hooks/useWeb3';

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
  }, [wallet.address]);

  useEffect(() => {
    connect();
  }, []);

  return (
    <div className="nft">
      <Link to="add-collection" className="btn">Add item</Link>
      <div className="nft--item">
        {myCollectionData && myCollectionData.myCollections.map(
          (item) => (
            <CardNFT
              key={uuidv4()}
              item={item}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default MyCollection;
