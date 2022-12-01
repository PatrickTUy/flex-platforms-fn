import React, { useState } from 'react';
import './TopBar.css';
const Hamburger = (props) => {
  const [burger_class, setBurgerClass] = React.useState(true);
  const [burgerOpen, setBurgerOpen] = React.useState(true);
  return (
    <div className={'displayMenu' + (props.statusBar ? ' visible' : '')}>
      <div className="w-fit ">
        <h2 className="link-text animate__animated animate__bounceInDown cursor-pointer">
          Home
        </h2>
      </div>
      <div className="padding">
        <h2 className="cursor-pointer">Our Solutions</h2>
      </div>

      <div className="padding">
        <h2 className="cursor-pointer">Our partners</h2>
      </div>

      <div className="padding">
        <h2 className="cursor-pointer">Team</h2>
      </div>

      <div className="padding">
        <h2 className="cursor-pointer">Get in Touch</h2>
      </div>

      <div className="padding">
        <h2 className="cursor-pointer">Careers</h2>
      </div>

      <button className="bg-white text-black w-[87px] h-[32px] cursor-pointer">
        Sign in
      </button>
    </div>
  );
};

export default Hamburger;
