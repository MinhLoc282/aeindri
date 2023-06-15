/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Banner from 'components/Banner';
import Slider from 'components/Slider';
import Album from 'components/Album';
import Partner from 'components/Partner';
import ContactHomePage from 'components/Contact/ContactHomePage';

import WaterImg from 'assets/img/banner-2.webp';

import useAlchemy from 'hooks/useAlchemy';

import './HomePage.scss';

function HomePage(props) {
  const { marketItem, fetchMarketItems } = useAlchemy();

  useEffect(() => {
    fetchMarketItems();
  }, []);

  return (
    <div className="home">
      <Banner />

      <Slider marketItem={marketItem.slice(0, 6)} />

      <Album marketItem={marketItem.slice()
        .sort(() => Math.random() - Math.random())}
      />

      <div className="water-container">
        <img className="water-img" src={WaterImg} alt="Water Ripple" />

        <div className="esg-container">
          <div className="esg-title">
            Brands to Get Behind - and why it is important
          </div>

          <div className="esg-text-container">
            <div className="esg-text">
              Each brand and artist on Aeindri Protocol is vetted by us
              - where we ensure that their ESG metrics are aligned with
              our core value. We want you to choose artists and brands who
              aligns with your core value too. Now, what are some of our core
              values? We believe that brands should communicate their sustainability
              values directly to their customer with each product they sell.
              Just the way we read food labels, we would like you to read the
              &quot;ESG label&quot; too. This is a two-way communication and a work in progress.
              Let&apos;s support our brands as they work with us to tell you how far they have come.
              You can always write to us with your questions and suggestions
              regarding this matter and we will definitely incorporate them into our
              ongoing metrics system.
            </div>
          </div>
        </div>
      </div>

      <Partner />

      <ContactHomePage />
    </div>
  );
}

HomePage.propTypes = {

};

export default HomePage;
