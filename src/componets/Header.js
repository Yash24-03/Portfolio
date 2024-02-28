import { useState, useEffect } from "react"

//import components
import Logo from "../assets/img/logo.png"
import Nav from "./Nav";
import Socials from "./Socials";
import NavMobiles from "./NavMobiles";

const Header = () => {
  const [bg,setBg] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY > 50 ? setBg(true) : setBg
      (false);
    });
  });

  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>

    <div className="container mx-auto h-full flex items-center justify-between">
      {/* logo */}
      <a href="#">
        <img src={Logo} className= "w-56 h-auto" alt=""/>
      </a>
      {/* nav */}
      <div className="hidden lg:block">
        <Nav/>
      </div>
      {/* Socials  */}
      <div className="hidden lg:block">
        <Socials/>
      </div>
      {/* nav mobile */}
      <div className="lg:hidden">
        <NavMobiles/>
      </div>
       </div>
    </header>
  
  );
};

export default Header