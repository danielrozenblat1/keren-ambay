import React, { useState, useEffect } from 'react';
import hair from "../Icons/wired-outline-692-hairdresser-barber-hover-pinch.json"
import brush from "../Icons/wired-outline-1591-hair-brush-hover-pinch.json"
import dress from "../Icons/wired-outline-653-marriage-hover-pinch.json"
import styles from './SecondScreen.module.css';
import IconTextComponent from "../components/can/Can"
const SecondScreen = () => {
 
  return (
  <div className={styles.container}>
    
   
    <div className={styles.title}>ממני תצאי</div>
    <div className={styles.row}>
    <IconTextComponent text="עם תסרוקת שתואמת בדיוק אלייך" icon={hair}/>
    <IconTextComponent text="עם תסרוקת יציבה לאורך כל הערב" icon={brush}/>
    <IconTextComponent text="עם תסרוקת שתואמת לשמלה לך" icon={dress}/>
    </div>
    </div>
  );
};

export default SecondScreen;