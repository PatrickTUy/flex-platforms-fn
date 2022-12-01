import React from 'react';

const Products = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-auto">
      <div className="flex self-center w-fit mb-7 lg:mb-0">
        <h1 className="text-primary text-4xl mt-10 font-bold">Our Products</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center m-auto gap-10">
        <div className="flex flex-col max-w-[350px]">
          <div className="w-fit flex flex-row lg:mb-8">
            <h1 className="text-5xl text-[#479CFF] font-[900]">FLEX</h1>
            <h1 className="text-5xl text-[#479CFF]">GO</h1>
          </div>
          <div>
            <h1 className="text-3xl mb-4 text-[#414141]">FlexGo</h1>
            <h5 className="w-5/6 text-[#5E5B5B]">
              All things are designed. A few things are designed well. We try to
              elevate your ideas with great UI/UX design, suited to your taste,
              addressing the right pain points.
            </h5>
          </div>
        </div>
        <div className="flex flex-col max-w-[350px]">
          <h1 className="text-5xl font-[500] mb-8 ">Konvey</h1>
          <div>
            <h1 className="text-3xl mb-4 text-[#414141]">Konvey</h1>
            <h5 className="w-5/6 text-[#5E5B5B]">
              All things are designed. A few things are designed well. We try to
              elevate your ideas with great UI/UX design, suited to your taste,
              addressing the right pain points.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
