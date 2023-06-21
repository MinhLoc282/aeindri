import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetMarketPlace } from 'store/actions';

import { v4 as uuidv4 } from 'uuid';

import CardNFT from 'components/CardNFTMarket';

import './AllNFTs.scss';

function AllNFTs() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MarketPlaces);

  useEffect(() => {
    dispatch(actionGetMarketPlace());
  }, []);

  return (
    <div className="nft">
      <div className="nft--item">
        {data.marketPlace && data.marketPlace?.length > 0 && data.marketPlace
          .map((item) => <CardNFT key={uuidv4()} item={item} />)}
      </div>
    </div>
  );
}

export default AllNFTs;
