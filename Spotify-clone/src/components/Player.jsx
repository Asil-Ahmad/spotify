import React, { useState, useContext } from "react";
import {
  loop_icon,
  looping,
  mic_icon,
  mini_player_icon,
  next_icon,
  notlooping,
  pause_icon,
  pauses,
  play_icon,
  plays,
  plays_icon,
  prev_icon,
  queue_icon,
  shuffle_icon,
  songsData,
  speaker,
  speaker_icon,
  speakerx,
  volume_icon,
  zoom_icon,
} from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { Link } from "react-router-dom";

const Player = () => {
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
    seekVolumeBg,
    seekVolumeBar,
    volumeSeek,
  } = useContext(PlayerContext);
  //if track available then show the div otherwise null

  const [open, setOpen] = useState(false);
  console.log(track);

  return track ? (
    <div
      className='h-[11%] bg-[#302d2d] z-10 flex justify-between max-sm:justify-normal items-center text-white pl-0 pr-2 
    max-sm:pl-0 max-sm:pr-1 fixed bottom-0 w-full'
    >
      <div className='hidden lg:flex items-center gap-4 '>
        {/* {console.log(track)}  */}

        <img
          className='w-24 lg:w-[82px] object-fill h-full'
          src={track.image}
          alt=''
        />

        <div className='xl:w-24 lg:w-10'>
          <p className=''>{track.name}</p>
          <p className='text-[10px]  text-gray-400'>
            {track.desc.slice(0, 12)}
          </p>
        </div>
      </div>
      {/* FOR MOBILE ONLY */}
      <Link
        to={`/music_player/${track._id}`}
        className='hidden max-lg:flex flex-col h-full items-center'
      >
        {/* {console.log(track)} */}
        <img className='object-cover h-full ' src={track.image} alt='' />
        {/* <p className='w-12 text-[10px] text-center'>
          {track.name.slice(0, 13)}
        </p> */}
      </Link>
      {/* FOR MOBILE ONLY end */}
      <div className='flex w-[75%] flex-col items-center justify-center  overflow-hidden'>
        <div className='flex gap-4 '>
          <img
            className='w-4 cursor-pointer max-sm:hidden object-contain'
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
              className='w-10 cursor-pointer object-contain hover:scale-105 active:scale-95'
              src={pauses}
              title='Pause'
              alt=''
            />
          ) : (
            <img
              onClick={play}
              className='w-10 cursor-pointer hover:scale-105 active:scale-95'
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
          {/* <img
            ref={loop}
            onClick={loopButton}
            className='w-4 cursor-pointer rounded-full  object-contain hover:scale-105'
            src={loop_icon}
            title='Loop'
            alt=''
          /> */}
          {/* <div className='hidden max-md:flex w-full items-center gap-3'>
            <img
              className='w-5 relative '
              src={volume_icon}
              alt=''
              onClick={() => setOpen(!open)}
            />
            {open ? (
              <div
                ref={seekVolumeBg}
                onClick={volumeSeek}
                className='w-20 cursor-pointer bg-slate-50 h-4 rounded-full'
              >
                <hr
                  ref={seekVolumeBar}
                  className='h-4 border-none seek-bar w-0 bg-green-800 rounded-full'
                />
              </div>
            ) : null}
          </div> */}
        </div>
        <div className='flex items-center gap-2 max-sm:gap-2 mt-2 px-1 '>
          <p className='tabular-nums text-[12px] text-gray-400'>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className='w-[60vw] max-sm:w-[50vw] max-w-[500px] bg-gray-500 rounded-full cursor-pointer group'
          >
            <hr
              ref={seekBar}
              className='h-1 border-none seek-bar w-0 bg-white group-hover:bg-[#1db954] rounded-full'
            />
          </div>
          <p className='tabular-nums text-[12px] text-gray-400'>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 '>
        <img className='w-4' src={plays_icon} alt='' />
        <img className='w-4' src={mic_icon} alt='' />
        <img className='w-4' src={queue_icon} alt='' />
        <img className='w-4' src={speaker_icon} alt='' />
        {open ? (
          <img
            className='w-[18px] cursor-pointer'
            src={speaker}
            alt=''
            onClick={() => setOpen(!open)}
          />
        ) : (
          <img
            className='w-[18px] cursor-pointer'
            src={speakerx}
            alt=''
            onClick={() => setOpen(!open)}
          />
        )}
        <div
          ref={seekVolumeBg}
          onClick={volumeSeek}
          className='w-20 cursor-pointer bg-gray-500 h-1 rounded group'
        >
          <hr
            ref={seekVolumeBar}
            className='h-1 border-none seek-bar w-0 bg-white  group-hover:bg-[#1db954] rounded-full'
          />
        </div>
        <img className='w-4' src={mini_player_icon} alt='' />
        <img className='w-4' src={zoom_icon} alt='' />
      </div>
    </div>
  ) : (
    console.log("err")
  );
};

export default Player;
