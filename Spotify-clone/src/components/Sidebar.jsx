import React from "react";
import {
  arrow_icon,
  home_icon,
  plus_icon,
  search_icon,
  stack_icon,
} from "../assets/frontend-assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div
          onClick={() => navigate("/")}
          className='flex items-center gap-3 pl-8 cursor-pointer'
        >
          <img className='w-6' src={home_icon} alt='' />
          <p className='font-bold'>Home</p>
        </div>

        <div
          onClick={() => navigate("/music")}
          className='flex items-center gap-3 pl-8 cursor-pointer'
        >
          <img className='w-6' src={search_icon} alt='' />
          <p className='font-bold'>Music</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={stack_icon} alt='' />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={arrow_icon} alt='' />
            <img className='w-5' src={plus_icon} alt='' />
          </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-1 pl-4 p-4 bg-[#242424] m-2 rounded font-semibold'>
          <h1>Create your first playlist.</h1>

          <p className='font-light'>its easy we will help you.</p>

          <NavLink to='/create_playlist'>
            <button
              className='px-4 py-1.5 bg-[#1ED760] text-[15px] text-black rounded-full mt-4
           hover:scale-105 transition-all duration-200'
            >
              Create Playlist
            </button>
          </NavLink>
        </div>

        <div className='flex flex-col items-start justify-start gap-1 pl-4 p-4 bg-[#242424] m-2 rounded font-semibold mt-4'>
          <h1>Let's find some podcasts to follow.</h1>
          <p className='font-light'>we'll keep you update on new episodes.</p>
          <button
            onClick={() => navigate("/podcasts")}
            className='px-4 py-1.5 bg-[#1ED760] text-[15px] text-black rounded-full mt-4
          hover:scale-105 transition-all duration-200'
          >
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
