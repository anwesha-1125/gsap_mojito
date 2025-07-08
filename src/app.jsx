import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/hero';

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const App = () => {
  
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black'/>
    </main>
  )
}

export default App
