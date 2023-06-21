import React, { useEffect, useState } from 'react';
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
  const [approvedNFT, setApprovedNFT] = useState(false);
  const [loading, setLoading] = useState(false);

  const image = item.media?.[0]?.gateway || item.image;
  const title = item.title || item.rawMetadata?.name;
  const description = item.description || item.rawMetadata?.description;

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSellNFT = (data) => async () => {
    if (approvedNFT) {
      setLoading(true);
      const success = await sellNFT({
        token: data.contract.address,
        tokenId: data.tokenId,
        price,
      });
      setLoading(false);

      if (success) {
        dispatch(actionRemoveCollection({ tokenId: data.tokenId, address: data.contract.address }));
      } else {
        toast.error('Sell NFT failed');
      }
    }
  };

  const handleApproveNFT = (data) => async () => {
    if (!approvedNFT) {
      setLoading(true);
      await approveNFT({
        collectionAddress: data.contract.address,
        tokenId: data.tokenId,
      });
      setLoading(false);

      setApprovedNFT(true);
    }
  };

  let buttonContent;
  if (!approvedNFT) {
    if (loading) {
      buttonContent = <span>Loading...</span>;
    } else {
      buttonContent = (
        <button
          type="button"
          className="card__content--btn"
          onClick={handleApproveNFT(item)}
          disabled={loading}
        >
          <span className="buy-now">Approve Token</span>
          <i className="fa-solid fa-arrow-right-long" />
        </button>
      );
    }
  } else if (loading) {
    buttonContent = <span>Loading...</span>;
  } else {
    buttonContent = (
      <button
        type="button"
        className="card__content--btn"
        onClick={handleSellNFT(item)}
        disabled={loading}
      >
        <span className="buy-now">Sell now</span>
        <i className="fa-solid fa-arrow-right-long" />
      </button>
    );
  }

  useEffect(() => {
    const checkApproveNFT = async () => {
      if (item.contract.address && item.tokenId) {
        const addressApproved = await getApprovedNFT({
          collectionAddress: item.contract.address,
          tokenId: item.tokenId,
        });

        if (addressApproved !== '0x0000000000000000000000000000000000000000') {
          setApprovedNFT(true);
        } else {
          setApprovedNFT(false);
        }
      }
    };

    checkApproveNFT();
  }, [item.contract.address, item.tokenId]);

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

        {buttonContent}
      </div>
    </div>
    )

  );
}

CardNFT.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default CardNFT;
