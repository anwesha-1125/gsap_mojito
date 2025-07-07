import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const App = () => {
  
  return (
    <div className='flex-center h-[100vh] '>
      <h1 className='text-3xl text-indigo'>Hello GSAP</h1>
    </div>
  )
}

export default App
