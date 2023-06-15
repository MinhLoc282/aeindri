/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import './ContactHomePage.scss';
import CustomForm from 'components/CustomForm';

const url = 'https://aeindri.us11.list-manage.com/subscribe/post?u=08cdec9ff071bbe46efd7c0dc&amp;id=3e8b9a2721&amp;f_id=00a59ae0f0';

function ContactHomePage(props) {
  return (
    <div className="contact-home">
      <div className="company">
        <Link to="/" className="nav-link">
          JOIN THE COMMUNITY
        </Link>

        <div className="company__icon">
          {/* <img src="https://static.wixstatic.com/media/11062b_e1117f9a7a1741ef955a84836121c4ad~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e1117f9a7a1741ef955a84836121c4ad~mv2.png" alt="icon" className="contact-icon" /> */}
          <a href="https://www.linkedin.com/company/82532686/admin/" target="_blank" rel="noreferrer" className="contact-icon">
            <img
              src="https://static.wixstatic.com/media/11062b_23e5890c2dfc4a04af80178b43ef66fd~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_23e5890c2dfc4a04af80178b43ef66fd~mv2.png"
              alt="icon"
              className="contact-icon"
            />
          </a>

          <a href="https://www.instagram.com/aeindri_protocol/" target="_blank" rel="noreferrer" className="contact-icon">
            <img
              src="https://static.wixstatic.com/media/11062b_482d38aa2aaa49a5b45774ebe9a5b544~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_482d38aa2aaa49a5b45774ebe9a5b544~mv2.png"
              alt="icon"
              className="contact-icon"
            />
          </a>

          <a href="https://twitter.com/Aeindri11" target="_blank" rel="noreferrer" className="contact-icon">
            <img
              src="https://static.wixstatic.com/media/444f49eac2e348f89128293b0c6432fd.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/444f49eac2e348f89128293b0c6432fd.png"
              alt="icon"
              className="contact-icon"
            />
          </a>
        </div>

        <div className="company__email">
          contact@aeindri.org
        </div>
      </div>

      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />

    </div>
  );
}

ContactHomePage.propTypes = {

};

export default ContactHomePage;
