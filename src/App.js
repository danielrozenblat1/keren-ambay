import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBarNew from "./components/NewNav/NavBarNew"
import SecondScreen from './screens/SecondScreen';
import { useEffect, useState } from 'react';
import Recommends from './components/recommends/Recommends';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import AdditionalServices from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import ByMe from './components/ByMe/ByMe';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <AboutMe/>
  <SecondScreen/>
  <Recommends/>

  <ThirdScreen/>
  <AdditionalServices/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
