import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

function CardBrand(props) {
  const { item } = props;

  return (
    <div className="card">
      <img src={item.image} alt="brand" className="card__img" />

      <div className="card__content">
        <span className="card__content--title">{item.name}</span>
        <span className="card__content--description">{item.description}</span>
        <span className="card__content--money">{item.company}</span>
      </div>
    </div>
  );
}

CardBrand.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};

export default CardBrand;
