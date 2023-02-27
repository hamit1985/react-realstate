import React, { useState } from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles'
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import Infosection from './components/Infosection';
import { InfoData } from './data/infoData';
function App() {

  const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle ={toggle} />
      <Hero Slides={SliderData}/>
      <Infosection {...InfoData}/>
     </>
  );
}

export default App;
