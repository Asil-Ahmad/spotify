import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const StaggerLoading = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 10,

      borderRadius: "100%",
      repeat: -1,
      stagger: 0.1,
      ease: "slow(0.7,0.7,false)",
      yoyo: true,
    });
  });
  return (
    <div className='mt-3'>
      <div className='flex gap-3'>
        <div className='w-7 h-7 bg-green-200 rounded-lg stagger-box max-sm:w-4 max-sm:h-4  ' />
        <div className='w-7 h-7 bg-green-300 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
        <div className='w-7 h-7 bg-green-400 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
        <div className='w-7 h-7 bg-green-700 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
        <div className='w-7 h-7 bg-green-600 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
        <div className='w-7 h-7 bg-green-700 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
        <div className='w-7 h-7 bg-green-800 rounded-lg stagger-box max-sm:w-4 max-sm:h-4 ' />
      </div>
    </div>
  );
};

export default StaggerLoading;
