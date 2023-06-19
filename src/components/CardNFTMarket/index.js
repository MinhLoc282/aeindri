import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useWeb3 from 'hooks/useWeb3';

import './Card.scss';

function CardNFT(props) {
  const { item } = props;

  const {
    buyNFT, getListingId, getPrice,
  } = useWeb3();

  const image = item.media?.[0]?.gateway || item.image;
  const title = item.title || item.rawMetadata?.name;
  const description = item.description || item.rawMetadata?.description;

  const [price, setPrice] = useState(0);

  const handleBuyNFT = (data) => async () => {
    const listingId = await getListingId({ token: data.contract.address, tokenId: data.tokenId });
    await buyNFT({ listingId });
  };

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
            {price}
            {' '}
            wei
          </label>
        </div>

        <button type="button" className="card__content--btn" onClick={handleBuyNFT(item)}>
          <span className="buy-now">Buy now</span>
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
