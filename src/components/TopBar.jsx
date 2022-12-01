import React, { UseState } from 'react';
import axios from 'axios';
import './TopBar.css';
const TopBar = (props) => {
  const [burger_class, setBurgerClass] = React.useState(false);
  const updateMenu = () => {
    setBurgerClass(!burger_class);
    props.changeState();
  };

  const googleLogin = async () => {
    fetch(`http://localhost:4000/api/auth/google`, {
      method: 'GET',
      mode: 'no-cors',
    }).then(() => console.log('okay'));
  };

  console.log(props);

  return (
    <div
      className={`w-full fixed top-0 z-10 ${
        !props.menuToggle ? 'bg-white' : ' bg-primary'
      }`}
    >
      <div className="w-full h-full py-8 flex flex-row justify-between align-center px-12 lg:px-8 xl:px-16">
        <div className="flex flex-col w-fit xl:pl-16 ">
          <h1 className="font-bold font m-0 font-poppins text-4xl self-start">
            FLEX
          </h1>
          <h5 className="font-normal font-poppins text-xs self-start">
            Platfoams
          </h5>
        </div>

        <div className="hidden lg:flex flex-row w-full justify-end items-center pr-8 xl:pr-32 ">
          <ul className="flex flex-row gap-12">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Our Solutions</li>
            <li className="cursor-pointer">Our Partners</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">Get in Touch</li>
            <li className="cursor-pointer">Careers</li>
          </ul>
          <a href="http://localhost:4000/api/auth/google" target="_blank">
            <button
              className="bg-primary text-white ml-12 w-[87px] h-[32px] cursor-pointer"
              onClick={() => googleLogin()}
            >
              Sign in
            </button>
          </a>
        </div>

        <div className="burger_Menu" onClick={updateMenu}>
          <div
            className={
              burger_class ? 'burger_Bar clicked' : 'burger_Bar unclicked'
            }
          ></div>
          <div
            className={
              burger_class ? 'burger_Bar clicked' : 'burger_Bar unclicked'
            }
          ></div>
          <div
            className={
              burger_class ? 'burger_Bar clicked' : 'burger_Bar unclicked'
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
