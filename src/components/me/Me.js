import React from 'react';
import styles from './Me.module.css';
import keren from "../../images/קרן אמבאי.png"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={keren} alt="קרן אמבאי" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>קרן אמבאי</h1>
        <div className={styles.subtitle}>"כיף לי לראות את הבטחון שלך , הכיף שלך והרוגע שלך אחרי התסרוקת"</div>
        <p className={styles.description}>
מאז שאני זוכרת את עצמי אהבתי להתעסק בתסרוקות וצמות ומאז ומתמיד הייתי מאוהבת בתחום והרגשתי שהוא בשבילי!  
        </p>

        <p className={styles.description}>
היום, אחרי 7 שנים שאני מתפרנסת מהתחום ומאות בנות שעברו אצלי אני יכולה להגיד שהמטרה העיקרית שלי היא לראות אותך אחרי התסרוקת! רגועה, שמחה ומוכנה לאירוע/לערב החשוב שלך!   
        </p>
   
      </div>
 
    </div>




    </>
};

export default AboutMe;