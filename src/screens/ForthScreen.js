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
      description: "שירות מותאם אישית להארכת שיער טבעית ומושלמת. אני מתמחה בתפירת תוספות שיער באיכות פרימיום, תוך התאמה מדויקת לטקסטורה ולגוון השיער הטבעי שלך."
    },
    {
      title: "החלקות",
      imageUrl: hairstraight,
      description: "טיפול החלקה מקצועי שמעניק לשיער שלך מראה חלק, בריא ומבריק. אני משתמשת בחומרים איכותיים ועדינים שמתאימים במיוחד לשיער שלך, תוך שמירה על בריאותו."
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