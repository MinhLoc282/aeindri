/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// import img1 from 'assets/img/img-1.jpg';
// import img2 from 'assets/img/img-2.jpg';
// import img3 from 'assets/img/img-3.jpg';
// import img4 from 'assets/img/img-4.jpg';
// import img5 from 'assets/img/img-5.jpg';
// import img6 from 'assets/img/img-6.jpg';

import './Album.scss';

function Album(props) {
  const { marketItem } = props;

  return (
    <div className="album">
      <div className="album__items">
        {marketItem.slice(0, 2).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={item.tokenId}>
            <div className="card">
              <img
                alt="img"
                src={`https://res.cloudinary.com/vinhhoang/image/upload/v1673882158/aeindri/${item.tokenId}`}
                className="card--img"
                width="222px"
                height="148px"
                style={{ objectFit: 'cover' }}
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
        {marketItem.slice(2, 4).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={item.tokenId}>
            <div className="card" key={item.tokenId}>
              <img
                alt="img"
                src={`https://res.cloudinary.com/vinhhoang/image/upload/v1673882158/aeindri/${item.tokenId}`}
                className="card--img"
                width="222px"
                height="124px"
                style={{ objectFit: 'cover' }}
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
        {marketItem.slice(4, 6).map((item) => (
          <Link to="/all-nfts" style={{ textDecoration: 'none', color: 'black' }} key={item.tokenId}>
            <div className="card" key={item.tokenId}>
              <img
                alt="img"
                src={`https://res.cloudinary.com/vinhhoang/image/upload/v1673882158/aeindri/${item.tokenId}`}
                className="card--img"
                width="222px"
                height="143px"
                style={{ objectFit: 'cover' }}
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

Album.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  marketItem: PropTypes.array.isRequired,
};

export default Album;
