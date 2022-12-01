import React from 'react';

const Location = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center overflow-auto">
      <div className=" flex flex-row w-full h-full justify-center items-center px-5">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28">
          <div className="max-w-[500px]">
            <h3 className="font-bold text-[#414141] pb-5">Location</h3>
            <img src="/map.png" className="w-full" />
          </div>
          <div className="flex flex-wrap flex-col">
            <h3 className="text-[#414141] font-bold mb-12">Get in Touch</h3>
            <div className="w-full flex flex-row lg:flex-col flex-wrap">
              <div className="flex flex-row  gap-4 mb-4 w-1/2 lg:w-full">
                <img src="/phone.svg" style={{ height: '25px' }}></img>
                <h4 className="text-[#414141]">07 xx xxx xxx</h4>
              </div>
              <div className="flex flex-row gap-4 mb-4 w-1/2 lg:w-full">
                <img src="/email.svg" style={{ height: '25px' }}></img>
                <h4 className="text-[#414141]">email@flex.com</h4>
              </div>
              <div className="flex flex-row gap-4 mb-4 w-1/2 lg:w-full">
                <img src="/fb.svg" style={{ height: '25px' }}></img>
                <h4 className="text-[#414141]">@flex.com</h4>
              </div>
              <div className="flex flex-row gap-4 mb-4 w-1/2 lg:w-full">
                <img src="/ig.svg" style={{ height: '25px' }}></img>
                <h4 className="text-[#414141]">@flex.com</h4>
              </div>
              <div className="flex flex-row gap-4 mb-4 w-1/2 lg:w-full">
                <img src="/twitter.svg" style={{ height: '25px' }}></img>
                <h4 className="text-[#414141]">@flex.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-[150px] bg-primary p-6 self-end">
        <div className="flex flex-col w-fit xl:pl-16 ">
          <h1 className="font-bold font m-0 font-poppins text-4xl self-start">
            FLEX
          </h1>
          <h5 className="font-normal font-poppins text-xs self-start">
            Platfoams
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Location;
