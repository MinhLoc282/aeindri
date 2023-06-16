import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

function CardNFT(props) {
  const { item, isMyNFT } = props;

  console.log(item);

  const handlepurchchaseNFT = () => {

  };

  const image = item.media?.[0]?.gateway || item.image;
  const title = item.title || item.rawMetadata.name;
  const description = item.description || item.rawMetadata.description;

  return (
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
        {!isMyNFT && (
        <button type="button" className="card__content--btn" onClick={handlepurchchaseNFT}>
          <span className="buy-now">Buy now</span>

          <i className="fa-solid fa-arrow-right-long" />
        </button>
        )}
      </div>
    </div>
  );
}

CardNFT.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  isMyNFT: PropTypes.bool,
};

CardNFT.defaultProps = {
  isMyNFT: false,
};

export default CardNFT;
