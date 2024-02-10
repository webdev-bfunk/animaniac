import { Menu } from "./components/(2ndMenu)/Menu";
import { BiArrowBack } from "react-icons/bi";
import About from "./components/About";
import Contact from "./components/Contact";
import DownArrow from "./components/DownArrow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoAnimation from "./components/LogoAnimation";
import MobileNav from "./components/MobileNav";
import NavMenu from "./components/NavMenu";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";


export default function Home() {


  return (
    <>
    <div className="flex w-full justify-end items-center ">
     
  
    </div>
    <div className="w-full mb-20 flex flex-col gap-20 items-center justify-between  mt-10">
      <Hero />
      <DownArrow />
    </div>
      <div className="flex flex-col gap-20 items-center justify-center">
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
  </>
  );
}
