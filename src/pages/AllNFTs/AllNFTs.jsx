/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CardNFT from 'components/CardNFT';

import './AllNFTs.scss';
import { actionGetMarketPlace } from 'store/actions';

function AllNFTs() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MarketPlaces);

  console.log(data);

  useEffect(() => {
    dispatch(actionGetMarketPlace());
  }, []);

  return (
    <div className="nft">
      <Link to="add-collection" className="btn">Add item</Link>
      <div className="nft--item">
        {data.marketPlace && data.marketPlace?.list?.length > 0 && data.marketPlace.list
          .map((item) => <CardNFT key={item._id} item={item} />)}
      </div>
    </div>
  );
}

export default AllNFTs;
