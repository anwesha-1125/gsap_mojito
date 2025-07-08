
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Cocktails from './components/cocktails';
import About from './components/about';
import Art from './components/art';
import Contact from './components/contact';
import Menu from "./components/menu";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const App = () => {
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact></Contact>
    </main>
  )
}

export default App
