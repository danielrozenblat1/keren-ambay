import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';

// New imports for more appropriate icons
import ChatIcon from '@mui/icons-material/Chat'; // לייעוץ ותיאום ציפיות
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // לזמינות עד האירוע
import EventIcon from '@mui/icons-material/Event'; // ליום האירוע

import styles from "./ThirdScreen.module.css";

import Button from "../components/button/Button"

const CustomizedTimeline = () => {

  React.useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <>
        <div className={styles.title} id="תהליך העבודה איתי">אז איך הקסם קורה?</div>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <ChatIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="Assistant" fontSize="1.2rem" color="black" id="item1" textAlign="right" direction="rtl" marginBottom="0">
        ייעוץ ותיאום ציפיות
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item1" textAlign="right" marginBottom="0">
      אנחנו נפגשות מכירות ומבינות מהן הציפיות שלך. אני רואה את השמלה שלך וכמובן שעם שאלות מתאימות מאפיינת ומתאימה את התסרוקת האידיאלית עבורך
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <WhatsAppIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="Assistant" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
           זמינה עבורך עד האירוע
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" marginRight="auto" textAlign="right" marginBottom="0">
       עד האירוע אני כאן בשבילך! לכל שאלה,התייעצות ומה שמטריד או מלחיץ אותך! והכי חשוב - כאן כדי להקליל אווירה!
            </Typography>
          </TimelineContent>
        </TimelineItem>
   
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <EventIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6"  dir="rtl"  component="span" fontFamily="Assistant" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
          יום האירוע!
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
     ביום האירוע אני מגיעה למקום ההתארגנות ומתחילה בתסרוקות עד לרגע שאת מתוקתקת!
            </Typography>
          </TimelineContent>
        </TimelineItem>
   
      </Timeline>

      <Button text="אני רוצה שנתחיל בתהליך!" />
    </>
  );
};

export default CustomizedTimeline;