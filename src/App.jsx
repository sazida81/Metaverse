import React, { useEffect, useState } from 'react'
import  Navbar  from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Quotes from './components/Quotes/Quotes.jsx'
import Banner from './components/Banner/Banner.jsx'
import Banner2 from './components/Banner/Banner2.jsx'
import Features from './components/Features/Features.jsx' 
import AppStore from './components/AppStore/AppStore.jsx'
import Footer from './components/Footer/Footer.jsx'
import PopUpPlayer from './components/PopUpPlayer/PopUpPlayer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {

  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = ()=>{
    setIsPlay(!isPlay);
  }
  useEffect (()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100,
    });
    AOS.refresh();
  },[]);
  return (
    <main className='overflow-x-hidden bg-black '>
     <Navbar />
     <Hero togglePlay={togglePlay}/>
     <Quotes />
     <Banner togglePlay={togglePlay}/>
     <Banner2 togglePlay={togglePlay}/>
     <Features />
     <AppStore />
     <Footer />
     <PopUpPlayer isPlay={isPlay} togglePlay={togglePlay}/>
    </main>
  )
}

export default App 
