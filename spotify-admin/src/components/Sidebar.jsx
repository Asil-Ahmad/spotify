import React from "react";
import {
  add_album,
  add_song,
  album_icon,
  logo,
  logo_small,
  song_icon,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#003a10] min-h-screen w-[25%] px-2 rounded-r'>
      <img
        src={logo}
        alt=''
        className='mt-5 w-[max(10vw,100px)] hidden sm:block'
      />
      <img
        src={logo_small}
        alt=''
        className='mt-5 w-[max(4vw,40px)] mr-5 sm:hidden block '
      />
      <div className='flex flex-col gap-5 mt-10'>
        {/* ADD SONG BUTTON------------------ */}
        <div
          className='flex items-center justify-center gap-2.5 text-gray-800 bg-white border rounded-full  border-black py-2  px-4
        text-sm font-medium cursor-pointer'
          onClick={() => navigate("/add-song")}
        >
          <img src={add_song} alt='' className='w-5' />
          <p className='hidden sm:block'>Add Song</p>
        </div>

        {/* LIST SONG BUTTON------------------ */}
        <div
          className='flex items-center justify-center gap-2.5 text-gray-800 bg-white border  rounded-full border-black p-2 
        text-sm font-medium cursor-pointer'
          onClick={() => navigate("/list-song")}
        >
          <img src={song_icon} alt='' className='w-5' />
          <p className='hidden sm:block'>List Song</p>
        </div>

        {/* ADD ALBUM BUTTON------------------ */}
        <div
          className='flex items-center justify-center gap-2.5 text-gray-800 bg-white border  rounded-full border-black p-2 
        text-sm font-medium cursor-pointer'
          onClick={() => navigate("/add-album")}
        >
          <img src={add_album} alt='' className='w-5' />
          <p className='hidden sm:block'>Add Album</p>
        </div>

        {/* LIST ALBUM BUTTON------------------ */}
        <div
          className='flex items-center justify-center gap-2.5 text-gray-800 bg-white border rounded-full  border-black p-2 
        text-sm font-medium cursor-pointer'
        onClick={() => navigate("/list-album")}
        >
          <img src={album_icon} alt='' className='w-5' />
          <p className='hidden sm:block'>List ALbum</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
