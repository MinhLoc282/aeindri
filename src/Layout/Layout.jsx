import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';

import './Layout.scss';
import Footer from './Footer/Footer';

function Layout(props) {
  const { children } = props;
  return (
    <div className="layout">
      <Header />

      <div className="container">
        {children}
      </div>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
};

export default Layout;
