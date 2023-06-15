import React from 'react';

import styles from './index.module.css';

function StoriesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            alt="IMG_6470.JPG"
            src="https://static.wixstatic.com/media/5301a4_07fef67a7a084bdc9b91b10b35343f1c~mv2.jpg/v1/fill/w_257,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6470_JPG.jpg"
          />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.text}>
            Please write a short quote here.
            Example: When we started True Classic, we set out to create the
            best men’s essential products for every guy out there, while also
            making an impact in our community. I am happy to say we have made
            good on that promise and giving back to our community is a pillar of our
            everyday mission.
          </div>
          <div className={styles.name}>
            Founder & CEO
            <br />
            Moon Jerin
          </div>
        </div>
      </div>

      <div className={styles.storyContainer}>
        <div className={styles.storyTitle}>
          How it started
        </div>

        <div className={styles.storyDetail}>
          Please enter the story of starting Aeidri
        </div>
      </div>

      <div className={styles.partnerContainer}>
        <div className={styles.partnerTitle}>
          Looking to partner?
        </div>

        <div className={styles.partnerButtonContainer}>
          <div className={styles.partnerText}>
            Click here
          </div>
          <div type="button" className={styles.partnerButton}><div>&gt;</div></div>
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;
