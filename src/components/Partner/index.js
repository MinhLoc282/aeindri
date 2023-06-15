/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import logo1 from 'assets/img/logo1.webp';
import logo2 from 'assets/img/logo2.webp';
import logo3 from 'assets/img/logo3.webp';
import logo4 from 'assets/img/logo4.webp';

import './Parner.scss';

function Partner(props) {
  return (
    <div className="partner">
      <div>
        <img src={logo1} alt="" className="partner__img" />
        <img src={logo2} alt="" className="partner__img" />
      </div>

      <div>
        <img src={logo3} alt="" className="partner__img" />
        <img src={logo4} alt="" className="partner__img" />
      </div>
    </div>
  );
}

Partner.propTypes = {

};

export default Partner;
