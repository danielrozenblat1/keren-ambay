import React from 'react';
import Button from "../components/button/Button"
import styles from './ForthScreen.module.css';
import tfira from "../images/תפירת שיער קרן.jpg";
import Card from '../components/card/Card';
import hairstraight from "../images/החלקות שיער קרן.jpg"
const AdditionalServices = () => {
  const services = [
    {
      title: "תפירת תוספות",
      imageUrl: tfira,
      description: "רוצה שיער ארוך ומהמם? בואי אליי! אני עושה תפירת תוספות שיער באיכות הכי טובה שיש, ומתאימה אותן בדיוק לשיער שלך - מהצבע ועד המרקם."
    },
    {
      title: "החלקות",
      imageUrl: hairstraight,
      description: "נמאס לך מהשיער המתולתל? בואי נעשה החלקה שתיתן לך שיער חלק ומבריק בדיוק כמו שחלמת. אני משתמשת רק בחומרים הכי טובים שישמרו על השיער שלך."
    }
];
  return <>
     <div className={styles.title} id="שירותים נוספים">שירותים נוספים</div>
      <div className={styles.row}>
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            imageUrl={service.imageUrl}
            description={service.description}
          />
        ))}
      </div>
 
 </>
};

export default AdditionalServices;