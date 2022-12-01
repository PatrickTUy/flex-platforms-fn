import React from 'react';

const Home = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className=" flex flex-col lg:flex-row py-5 lg:py-20 px-2 lg:px-[8rem] lg:pt-10 ">
        <div className="lg:pl-20 max-w-[400px] w-full self-center">
          <h1 className="font-poppins text-4xl lg:text-6xl w-fit mb-4 lg:mb-8">
            Welcome,
          </h1>
          <h2
            className="font-poppins text-4xl lg:text-6xl mb-2 lg:mb-4 min-w-[350px] lg:w-fit
           "
          >
            Flex with us
          </h2>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et at
            fringilla id maecenas in scelerisque in. Pharetra, erat amet,
            vestibulum ullamcorper.{' '}
          </p>
        </div>

        <div className="max-w-[500px] w-full mt-10 lg:mt-0 self-center">
          <img src="/bg.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
