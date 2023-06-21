import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import useWeb3 from 'hooks/useWeb3';

import { actionRemoveNft } from 'store/actions';

import './Card.scss';

function CardNFT(props) {
  const { item } = props;

  const {
    wallet, buyNFT, getListingId, getPrice, cancelListing,
  } = useWeb3();

  const dispatch = useDispatch();

  const image = item.media?.[0]?.gateway || item.image;
  const title = item.title || item.rawMetadata?.name;
  const description = item.description || item.rawMetadata?.description;

  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleBuyNFT = (data) => async () => {
    try {
      setLoading(true);
      const listingId = await getListingId({ token: data.contract.address, tokenId: data.tokenId });
      const success = await buyNFT({ listingId, price: price.price });
      setLoading(false);

      if (success) {
        dispatch(actionRemoveNft({ tokenId: data.tokenId, address: data.contract.address }));
      } else {
        toast.error('Buy NFT failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelNFT = (data) => async () => {
    try {
      setLoading(true);
      const listingId = await getListingId({ token: data.contract.address, tokenId: data.tokenId });
      const success = await cancelListing({ listingId });
      setLoading(false);

      if (success) {
        dispatch(actionRemoveNft({ tokenId: data.tokenId, address: data.contract.address }));
      } else {
        toast.error('Cancel listing failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  let buttonContent;
  if (price?.owner?.toLowerCase() !== wallet.address) {
    if (loading) {
      buttonContent = <span>Loading...</span>;
    } else {
      buttonContent = (
        <button
          type="button"
          className="card__content--btn"
          onClick={handleBuyNFT(item)}
        >
          <span className="buy-now">Buy now</span>
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
        onClick={handleCancelNFT(item)}
      >
        <span className="buy-now">Cancel</span>
        <i className="fa-solid fa-arrow-right-long" />
      </button>
    );
  }

  useEffect(() => {
    async function fetchPrice() {
      const listingId = await getListingId({ token: item.contract.address, tokenId: item.tokenId });
      const p = await getPrice({ listingId });
      setPrice(p);
    }

    if (item.contract.address) {
      fetchPrice();
    }
  }, []);

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
          <label htmlFor="priceInput">
            Price:
            {' '}
            {price.price}
            {' '}
            wei
          </label>
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
