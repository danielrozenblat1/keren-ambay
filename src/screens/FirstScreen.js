import React, { useState, useEffect } from 'react';
import keren from "../images/קרן אמבאי ראשית.png"
import styles from './FirstScreen.module.css';

const FirstScreen = (props) => {
 


  return (
  <div className={styles.container}>
    
    {/* <div className={styles.description}>במיוחד עבור כלות לעתיד</div> */}
        
    <div className={!props.scrolled ?styles.title:styles.titleP}>KEREN HAIRSTYLE</div>
    <div className={styles.center}>
        <img src={keren} alt="קרן אמבאי" className={styles.image} />
      </div>
    <div className={styles.job}>תסרוקות לכלות | תסרוקות ערב | החלקות | תפירת שיער</div>

    </div>
  );
};

export default FirstScreen;