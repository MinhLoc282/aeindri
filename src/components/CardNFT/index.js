import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import useWeb3 from 'hooks/useWeb3';

import { actionRemoveCollection } from 'store/actions';

import './Card.scss';

function CardNFT(props) {
  const { item } = props;

  const {
    sellNFT, approveNFT, getApprovedNFT,
  } = useWeb3();

  const dispatch = useDispatch();

  const [price, setPrice] = useState('');

  const image = item.media?.[0]?.gateway || item.image;
  const title = item.title || item.rawMetadata?.name;
  const description = item.description || item.rawMetadata?.description;

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSellNFT = (data) => async () => {
    const addressApproved = await getApprovedNFT({
      collectionAddress: data.contract.address,
      tokenId: data.tokenId,
    });

    if (addressApproved === '0x0000000000000000000000000000000000000000') {
      await approveNFT({
        collectionAddress: data.contract.address,
        tokenId: data.tokenId,
      });
    } else {
      const success = await sellNFT({
        token: data.contract.address,
        tokenId: data.tokenId,
        price,
      });

      if (success) {
        dispatch(actionRemoveCollection({ tokenId: data.tokenId, address: data.contract.address }));
      } else {
        toast.error('Sell NFT failed');
      }
    }
  };

  return (
    item.tokenId && item.title && (
    <div className="card">
      <img src={image} alt="NFT" className="card__img" />

      <div className="card__content">
        <span className="card__content--title">{title}</span>
        <span className="card__content--discription">{description}</span>
        <span className="card__content--money">
          Token Id:
          {' '}
          {item.tokenId}
        </span>

        <div className="card__content--price">
          <label htmlFor="priceInput">Price:</label>
          <input
            id="priceInput"
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price in wei"
          />
        </div>

        <button type="button" className="card__content--btn" onClick={handleSellNFT(item)}>
          <span className="buy-now">Sell now</span>
          <i className="fa-solid fa-arrow-right-long" />
        </button>
      </div>
    </div>
    )

  );
}

CardNFT.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default CardNFT;
