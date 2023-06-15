import React from 'react';

import video from 'assets/videos/aboutPage.mp4';

import styles from './index.module.css';
import 'animate.css/animate.min.css';

function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video playsInline autoPlay muted loop className={styles.video}>
            <source src={video} type="video/mp4" />
          </video>

          <div className={styles.videoText}>
            AEINDRI was born to be a
            change maker for the future
          </div>
        </div>

        <div className={styles.textContainer}>
          <div>
            Building a no code phygital marketplace
          </div>
          <div className={styles.text}>
            At Aeindri, we want to enable any brands,
            artists or service provider to offer a non fungible token
            without coding a single line or trade in crypto.
            The possibilities with NFT&apos;s are endless and it is
            still left for interpretation for many.
            We are here to make it simpler for people to connect
            the dots with what they understand the best-physical product and IRL experience.
            We saw that most people did not understand the bored
            ape yacht, but they were willing to experience the benefits
            holding an NFT to could bring them.
            That is why we created a simple tool to have all phygital NFTs in one place ,
            to make is simple for both parties.
            We&apos;re excited to be the first phygital marketplace for NFTs.
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutPage;
