import React from 'react'
import  Navbar  from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Quotes from './components/Quotes/Quotes.jsx'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black '>
     <Navbar />
     <Hero />
     <Quotes />
    </main>
  )
}

export default App 
