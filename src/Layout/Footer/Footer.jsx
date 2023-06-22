/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { LOCATION } from 'constants/index';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content--colContainer">
          <div className="footer__content--col">
            <Link to="/all-nfts" className="nav-link nav-link__btn">
              MARKETPLACE
            </Link>

            <Link to="/all-nfts" className="nav-link">All NFTs</Link>

            <Link to="/all-brands" className="nav-link">All Brands</Link>
          </div>

          <div className="footer__content--col">
            <Link to={LOCATION.MY_COLLECTION} className="nav-link nav-link__btn">
              MY ACCOUNT
            </Link>

            {/* <Link to="/profile" className="nav-link">
              Profile
            </Link>

            <Link to="/" className="nav-link">
              My Creations
            </Link> */}

            <Link to={LOCATION.MY_COLLECTION} className="nav-link">
              My Collections
            </Link>
          </div>
        </div>

        <div className="footer__content--colContainer">
          <div className="footer__content--col">
            <Link to="/about" className="nav-link nav-link__btn">
              COMPANY
            </Link>

            <Link to="/about" className="nav-link">About</Link>

            <Link to="/stories" className="nav-link">Story</Link>

            {/* <Link to="/" className="nav-link">Contract</Link>

          <Link to="/" className="nav-link">News</Link> */}
          </div>

          {/* <div className="footer__content--col">
            <Link to="/" className="nav-link nav-link__btn">
              RESOURCES
            </Link>

            <Link to="/" className="nav-link">Support</Link>

            <Link to="/" className="nav-link">Blog </Link>

            <Link to="/" className="nav-link">Help Center</Link>
          </div> */}
        </div>
      </div>

      <div className="footer__section">
        <div className="footer__section--left">
          @2022 Aeindri Protocol Inc.
        </div>

        <div className="footer__section--right">
          <Link to="/" className="nav-link">
            Privacy Policy
          </Link>
          <Link to="/" className="nav-link">
            Terms of Services
          </Link>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
};

export default memo(Footer);
