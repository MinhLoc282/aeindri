import React from 'react';

import styles from './index.module.scss';

function ESGPage() {
  return (
    <div className={styles.ESGPage}>
      <div className={styles.title}>
        Brands to Get Behind - and why it is important
      </div>

      <div className={styles.titleMobile}>
        Brands to Get
        <br />
        Behind - and why it
        <br />
        is important
      </div>

      <div className={styles.container}>
        <div className={styles.text}>
          Each brand and artist on Aeindri Protocol is vetted by us
          - where we ensure that their ESG metrics are aligned with
          our core value. We want you to choose artists and brands who
          aligns with your core value too. Now, what are some of our core
          values? We believe that brands should communicate their sustainability
          values directly to their customer with each product they sell.
          Just the way we read food labels, we would like you to read the
          “ESG label’ too. This is a two-way communication and a work in progress.
          Let’s support our brands as they work with us to tell you how far they have come.
          You can always write to us with your questions and suggestions
          regarding this matter and we will definitely incorporate them into our
          ongoing metrics system.
        </div>
      </div>
    </div>
  );
}

export default ESGPage;
