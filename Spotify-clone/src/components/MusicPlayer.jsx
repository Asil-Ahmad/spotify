import React, { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useNavigate } from "react-router-dom";
import {
  arrow_left,
  looping,
  next_icon,
  notlooping,
  pauses,
  plays,
  prev_icon,
  shuffle_icon,
} from "../assets/frontend-assets/assets";

const MusicPlayer = () => {
  const navigate = useNavigate();
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    next,
    prev,
    loop,
    loopButton,
    isLoop,
    seekSong,
  } = useContext(PlayerContext);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className='relative px-5 py-10 justify-center flex flex-col'>
      {/* Blurred Background Div */}

      <div
        className='absolute inset-0 bg-cover bg-center blur-3xl '
        style={{ backgroundImage: `url(${track.image})` }}
      />

      <button
        className='absolute top-2 max-sm:left-5 '
        onClick={() => navigate(-1)}
      >
        <img
          src={arrow_left}
          alt='arrow left'
          className='w-7 p-1 bg-black rounded-full  '
        />
      </button>

      <div className='pt-5 z-10'>
        <img
          src={track.image}
          alt=''
          className='rounded-xl sm:w-[280px] w-full  '
        />
        <h1 className='text-xl font-bold mt-4 '>{track.name}</h1>
        <p className='text-[10px]'>{track.desc}</p>
      </div>

      <div className='flex items-center gap-2 max-sm:gap-2 py-5 px-1 z-10 '>
        <p className='tabular-nums text-[12px] text-gray-100'>
          {time.currentTime.minute}:{time.currentTime.second}
        </p>
        <div
          ref={seekBg}
          onClick={seekSong}
          className='w-full bg-gray-500 rounded-full cursor-pointer group'
        >
          <hr
            ref={seekBar}
            className='h-1 border-none seek-bar w-0 bg-white group-hover:bg-[#1db954] rounded-full'
          />
        </div>
        <p className='tabular-nums text-[12px] text-gray-100'>
          {time.totalTime.minute}:{time.totalTime.second}
        </p>
      </div>

      <div className=' flex justify-center z-10'>
        <div className='w-full flex justify-evenly '>
          <img
            className='w-4 cursor-pointer object-contain'
            src={shuffle_icon}
            alt=''
          />
          <img
            onClick={prev}
            className='w-4 cursor-pointer object-contain hover:scale-105'
            src={prev_icon}
            title='Previous'
            alt=''
          />
          {playStatus ? (
            <img
              onClick={pause}
              className='w-16 cursor-pointer object-contain hover:scale-105 active:scale-95'
              src={pauses}
              title='Pause'
              alt=''
            />
          ) : (
            <img
              onClick={play}
              className='w-16 cursor-pointer hover:scale-105 active:scale-95'
              src={plays}
              title='Play'
              alt=''
            />
          )}
          <img
            onClick={next}
            className='w-4 cursor-pointer object-contain hover:scale-105'
            src={next_icon}
            title='Next'
            alt=''
          />
          {isLoop ? (
            <img
              ref={loop}
              onClick={loopButton}
              className='w-5 cursor-pointer rounded-full rotate-90  object-contain hover:scale-105'
              src={looping}
              title='Loop'
              alt=''
            />
          ) : (
            <img
              ref={loop}
              onClick={loopButton}
              className='w-5 cursor-pointer rounded-full rotate-90   object-contain hover:scale-105'
              src={notlooping}
              title='Loop'
              alt=''
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
