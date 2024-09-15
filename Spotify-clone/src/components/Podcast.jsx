import React from "react";
import Navbar from "./Navbar";

const Podcasts = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-20'>
        <h1 className='text-3xl animate-pulse font-bold text-gray-400'>
          Nothing to show here.
        </h1>
      </div>
    </>
  );
};

export default Podcasts;
