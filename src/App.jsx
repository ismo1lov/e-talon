import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Community from './components/Community'
import Unlock from './components/Unlock'
import Achivements from './components/Achievements'
import Calendar from './components/Calendar'
import Contact from './components/Contact'
import Update from './components/Updates'
import Register from './components/Register'
import Footer from './components/Footer'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

    return(
        <>
          <Navbar/>
          <main>
            <Hero/>
            <Clients/>
            <Community/>
            <Unlock/>
            <Achivements/>
            <Calendar/>
            <Contact/>
            <Update/>
            <Register/>
          </main>
          <Footer/>
        </>
    )
}

export default App