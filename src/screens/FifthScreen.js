
import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"

import styles from "./FifthScreen.module.css"

const FifthScreen=()=>{


return <>

    <div className={styles.title} id="שאלות תשובות">תשובות לשאלות שלכן</div>
    <FAQItem question="האם את מלווה גם ביום האירוע? " answer="את התסרוקת אנחנו עושות ביום האירוע וכמובן שאני מגיעה לערב האירוע במידה והכלה רוצה להחליף תסרוקת במהלך הערב"/>
    <FAQItem question="אני עומדת להתחתן! ,כמה זמן לפני אפשר לקבוע ולשריין תאריך?" answer="ניתן לשריין חצי שנה מראש, אני ממליצה לך לשריין ברגע שיש לך תאריך לאירוע"/>
    <FAQItem question="האם את מגיעה למקום ההתארגנות?" answer="כן! אני מגיעה למקום ההתארגנות ברדיוס של באר שבע ועד חדרה"/>
    <FAQItem question="מה ההבדל בין תסרוקת עם תוספות לתסרוקת ללא תוספות?" answer="ההבדל הוא בנפח השיער ובעובי השיער וכמובן שתסרוקת עם תוספות מתומחרת בצורה שונה"/>
    <FAQItem question=" האם יש לך תוספות למכירה?" answer="כן השרות שלי ניתן גם עם תוספות כמובן אם הזמנה מראש"/>
<Button text="קרן, בואי נדבר!"/>
</>


}
export default FifthScreen