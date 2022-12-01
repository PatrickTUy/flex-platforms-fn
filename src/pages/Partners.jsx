import React from 'react';

const Partners = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center overflow-auto">
      <div className="flex self-center w-fit">
        <h1 className="text-primary text-4xl mt-10 font-bold">Our Partners</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 justify-center items-center w-max">
        <img src="/image1.png" alt="image" />
        <img src="/image2.png" alt="image" />
        <img src="/image3.png" alt="image" />
        <img src="/image4.png" alt="image" />
        <img src="/image5.png" alt="image" />
        <img src="/image1.png" alt="image" />
        <img src="/image2.png" alt="image" />
        <img src="/image3.png" alt="image" />
        <img src="/image4.png" alt="image" />
        <img src="/image5.png" alt="image" />
      </div>
    </div>
  );
};

export default Partners;
