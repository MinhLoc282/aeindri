import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Card.scss';
import useWeb3 from 'hooks/useWeb3';

function CardNFT(props) {
  const { item, isMyNFT } = props;

  const [brand, setBrand] = useState({});

  const { getIdToBrand, purchaseNFT } = useWeb3();

  const callback = (resBrand) => {
    setBrand(resBrand);
  };

  const handlepurchchaseNFT = () => {
    purchaseNFT(item);
  };

  useEffect(() => {
    getIdToBrand(item.brandId, callback);
  }, []);

  return (
    <div className="card">
      <img src={`https://res.cloudinary.com/vinhhoang/image/upload/v1673882158/aeindri/${item.tokenId}`} alt="NFT" className="card__img" />

      <div className="card__content">
        <span className="card__content--title">{item.title}</span>
        <span className="card__content--discription">{brand.description}</span>
        <span className="card__content--money">{item.price}</span>
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
