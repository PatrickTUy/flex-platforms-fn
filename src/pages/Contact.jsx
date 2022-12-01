import React from 'react';

const Contact = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 overflow-auto">
      <div className="flex flex-row px-10 m-auto w-full justify-center">
        <div className="flex flex-col self-center mr-[-30px] z-10 bg-white">
          <h1 className="text-primary text-4xl my-6 font-bold w-full ">
            {' '}
            Contact us
          </h1>
          <h3 className="text-[#9F9F9F] self-start mb-8 w-3/5">
            Let's discuss what projects you have in mind
          </h3>
          <button className="bg-black text-white w-fit mb-4">
            <h1 className="p-5"> Let's Have a Coffee</h1>
          </button>
        </div>
        <div className=" max-w-[400px]">
          <img src="/contact.png" />
        </div>
      </div>
      <div className="flex flex-col px-10 m-auto max-w-[870px] w-full ">
        <div className="w-full border border-[#5E5B5B] bg-gray-100 p-2 flex items-center mb-2  ">
          <input
            type="text"
            placeholder="Full name"
            className=" outline-none text-sm flex-1 px-2"
          />
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-full border border-[#5E5B5B] bg-gray-100 p-2 flex items-center mb-2  ">
            <input
              type="email"
              placeholder="Email"
              className=" outline-none text-sm flex-1 px-2"
            />
          </div>
          <div className="w-full border border-[#5E5B5B] bg-gray-100 p-2 flex items-center mb-2  ">
            <input
              type="text"
              placeholder="Phone"
              className=" outline-none text-sm flex-1 px-2"
            />
          </div>
        </div>

        <div className="w-full h-32 border border-[#5E5B5B] bg-gray-100 p-2 flex items-center mb-2  ">
          <textarea
            placeholder="Message"
            className=" outline-none text-sm flex-1 px-2 h-full w-full"
          />
        </div>
        <button className="bg-black text-white w-fit mt-8">
          <h1 className="text-white py-2 px-8">Send</h1>
          </button>
      </div>
    </div>
  );
};

export default Contact;
