import React from "react";
import { social } from "../data";
import Logo from "../assets/img/logo.png"

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row space-y-0 lg:space-y-0
            items-center justify-between"
        >
          {/* social icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            <img src={Logo} className= "w-56 h-auto py-8" alt=""/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
