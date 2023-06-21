import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionGetMarketPlace } from 'store/actions';

import { v4 as uuidv4 } from 'uuid';

import './Album.scss';

function Album() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MarketPlaces);

  useEffect(() => {
    dispatch(actionGetMarketPlace());
  }, []);

  return (
    <div className="album">
      <div className="album__items">
        {data.marketPlace && data.marketPlace?.slice(0, 2).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={uuidv4()}>
            <div className="card">
              <img
                alt="img"
                src={item.media[0].gateway}
                className="card--img"
                width="222px"
                height="148px"
                style={{ objectFit: 'contain' }}
              />

              <div className="card--content">
                Dener Silva
                {' '}
                #
                {item.tokenId}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="album__items">
        {data.marketPlace?.slice(2, 4).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={uuidv4()}>
            <div className="card">
              <img
                alt="img"
                src={item.media[0].gateway}
                className="card--img"
                width="222px"
                height="124px"
                style={{ objectFit: 'contain' }}
              />

              <div className="card--content">
                Dener Silva
                {' '}
                #
                {item.tokenId}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="album__items">
        {data.marketPlace?.slice(4, 6).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={uuidv4()}>
            <div className="card">
              <img
                alt="img"
                src={item.media[0].gateway}
                className="card--img"
                width="222px"
                height="143px"
                style={{ objectFit: 'contain' }}
              />

              <div className="card--content">
                Dener Silva
                {' '}
                #
                {item.tokenId}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Album;
