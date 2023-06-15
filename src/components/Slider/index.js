import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Slider.scss';

function Slider(props) {
  const { marketItem } = props;

  const [checked, setChecked] = useState(1);

  const onCheck = (e) => {
    setChecked(Number(e.target.value));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (checked === 6) {
        setChecked(1);
      } else {
        setChecked(checked + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [checked]);

  return (
    <div className="slider">
      <div className="slider__title">
        FEATURED COLLECTION
      </div>

      <div className="slider__item">
        <input type="checkbox" name="slider" id="s1" onChange={onCheck} value={1} checked={checked === 1} />
        <input type="checkbox" name="slider" id="s2" onChange={onCheck} value={2} checked={checked === 2} />
        <input type="checkbox" name="slider" id="s3" onChange={onCheck} value={3} checked={checked === 3} />
        <input type="checkbox" name="slider" id="s4" onChange={onCheck} value={4} checked={checked === 4} />
        <input type="checkbox" name="slider" id="s5" onChange={onCheck} value={5} checked={checked === 5} />
        <input type="checkbox" name="slider" id="s6" onChange={onCheck} value={6} checked={checked === 6} />

        {marketItem.map((item, index) => (
          <label htmlFor={`s${index + 1}`} id={`slider${index + 1}`} key={item.tokenId}>
            <img
              src={`https://res.cloudinary.com/vinhhoang/image/upload/v1673882158/aeindri/${item.tokenId}`}
              alt="Slider"
              className="slider__item--img"
              width="404px"
              height="205px"
              style={{ objectFit: 'cover' }}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  marketItem: PropTypes.array.isRequired,
};

export default Slider;
