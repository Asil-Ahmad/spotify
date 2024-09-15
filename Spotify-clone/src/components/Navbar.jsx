import React from "react";
import {
  arrow_left,
  arrow_right,
  navlinks,
} from "../assets/frontend-assets/assets";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  // console.log(id);

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold px-2 mt-2'>
        <div className='flex items-center gap-2'>
          <img
            className='w-7 bg-black p-1 rounded-xl cursor-pointer hover:scale-90'
            src={arrow_left}
            alt=''
            onClick={() => navigate(-1)}
          />
          <img
            className='w-7 bg-black p-1 rounded-xl cursor-pointer hover:scale-90'
            src={arrow_right}
            alt=''
            onClick={() => navigate(+1)}
          />
        </div>
        <div className='flex items-center gap-4'>
          <a href='https://www.spotify.com/in-en/premium/'>
            <p
              className='bg-gradient-to-r from-[#1ED760] to-lime-500 hover:animate-pulse text-black text-[15px] px-4 py-1 rounded-2xl
            hidden md:block cursor-pointer hover:scale-105'
            >
              Explore Premium
            </p>
          </a>

          <a href='https://asildev-spotifyadmin.netlify.app/'>
            <p className=' hidden max-sm:block hover:scale-105  text-black  bg-[#1ED760] py-1 px-3 max-sm:px-1 max-sm:text-[12px] text-center text-nowrap rounded-2xl text-[15px] cursor-pointer '>
              Create Playlist
            </p>
          </a>
          <a href='https://www.spotify.com/de-en/download/windows/'>
            <p className=' bg-black hover:scale-105 text-white py-1 px-3 max-sm:px-1 max-sm:text-[12px] text-center text-nowrap rounded-2xl text-[15px] cursor-pointer'>
              Install App
            </p>
          </a>
          <p className='bg-white hover:scale-105 hover:bg-slate-200 text-black px-3 py-1 max-sm:px-1 max-sm:text-[12px] text-center text-nowrap rounded-full flex items-center justify-center'>
            Login
          </p>
        </div>
      </div>

      {/* THIS WILL SEE IF ITS NOT ALBUM THEN DONT SHOW NAVLINKS USING ID */}
      {pathname !== `/album/${id}` ? (
        <div className='flex items-center gap-4 mt-4 px-2'>
          {navlinks.map((navlink, index) => (
            <NavLink
              key={index}
              to={navlink.link}
              className={({ isActive }) =>
                ` text-black px-4 py-1 rounded-2xl cursor-pointer transition-all duration-1000 ${
                  isActive ? " bg-white text-black" : "text-white"
                }`
              }
            >
              {navlink.href}
            </NavLink>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
