import React from 'react';

const Team = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-auto gap-6">
      <div className="flex self-center w-fit">
        <h1 className="text-primary text-4xl mt-10 font-bold">Our Team</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="self-center">
          <div className="min-h-[6.5rem] min-w-[6.5rem] cursor-pointer">
            <img src="/coo.png" alt="" className="rounded-full" />
          </div>
          <div className="mt-4">
            <h2 className="text-center font-[600]">Elisabeth Be</h2>
            <h2 className="text-center font-[600]">COO</h2>
          </div>
        </div>

        <div className="self-center px-32">
          <div className="min-h-[8.5rem] min-w-[8.5rem] cursor-pointer">
            <img src="/ceo.png" alt="" className="rounded-full" />
          </div>
          <div className="mt-6">
            <h2 className="text-center font-[600]">Andre Wijaya</h2>
            <h2 className="text-center font-[600] text-[#9F9F9F]">COO/CTO</h2>
          </div>
        </div>

        <div className="self-center">
          <div className="min-h-[6.5rem] min-w-[6.5rem] cursor-pointer">
            <img src="/cfo.png" alt="" className="rounded-full" />
          </div>
          <div className="mt-4">
            <h2 className="text-center font-[600]">Sanjaya Wahono</h2>
            <h2 className="text-center font-[600]"> CFO</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row m-auto gap-4 pb-32">
        <div className="bg-[#9F9F9F] h-[10px] w-[10px] rounded-full"></div>
        <div className="bg-[#E5E5E5] h-[10px] w-[10px] rounded-full"></div>
        <div className="bg-[#E5E5E5] h-[10px] w-[10px] rounded-full"></div>
        <div className="bg-[#E5E5E5] h-[10px] w-[10px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Team;
