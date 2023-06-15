/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import video from 'assets/videos/file.mp4';

import './banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      <video playsInline autoPlay muted loop className="banner__img">
        <source src={video} type="video/mp4" />
      </video>

      <div className="banner__content">
        <div className="banner__content--title">
          Create, measure and sell
        </div>

        <div className="banner__content--sub-title">
          World&apos;s first phygital NFT platform measuring ESG
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {

};

export default Banner;
