/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useAlchemy from 'hooks/useAlchemy';

import CardNFT from 'components/CardNFT';

import './AllNFTs.scss';

function AllNFTs(props) {
  const { marketItem, fetchMarketItems } = useAlchemy();

  useEffect(() => {
    fetchMarketItems();
  }, []);

  return (
    <div className="nft">
      <Link to="add-collection" className="btn">Add item</Link>
      <div className="nft--item">
        {marketItem && marketItem.map((item) => <CardNFT key={item.tokenId} item={item} />)}
      </div>
    </div>
  );
}

AllNFTs.propTypes = {

};

export default AllNFTs;
