import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetMarketPlace } from 'store/actions';

import { v4 as uuidv4 } from 'uuid';

import './Slider.scss';

function Slider() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MarketPlaces);

  const mappedItems = useMemo(
    () => data.marketPlace?.slice(0, 6).map((item, index) => (
      <label htmlFor={`s${index + 1}`} id={`slider${index + 1}`} key={uuidv4()}>
        <img
          src={item.media[0].gateway}
          alt="Slider"
          className="slider__item--img"
          width="404px"
          height="205px"
          style={{ objectFit: 'contain' }}
        />
      </label>
    )),
    [data.marketPlace],
  );

  const [checked, setChecked] = useState(1);

  const onCheck = (e) => {
    setChecked(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(actionGetMarketPlace());
  }, []);

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
      <div className="slider__title">FEATURED COLLECTION</div>

      <div className="slider__item">
        <input type="checkbox" name="slider" id="s1" onChange={onCheck} value={1} checked={checked === 1} />
        <input type="checkbox" name="slider" id="s2" onChange={onCheck} value={2} checked={checked === 2} />
        <input type="checkbox" name="slider" id="s3" onChange={onCheck} value={3} checked={checked === 3} />
        <input type="checkbox" name="slider" id="s4" onChange={onCheck} value={4} checked={checked === 4} />
        <input type="checkbox" name="slider" id="s5" onChange={onCheck} value={5} checked={checked === 5} />
        <input type="checkbox" name="slider" id="s6" onChange={onCheck} value={6} checked={checked === 6} />

        {mappedItems}
      </div>
    </div>
  );
}

export default Slider;
