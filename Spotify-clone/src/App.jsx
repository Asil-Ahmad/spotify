import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import StaggerLoading from "./components/StaggerLoading";
import { arrow_right, arrowleft } from "./assets/frontend-assets/assets";
import { Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      {songsData.length !== 0 ? (
        <>
          <div className='h-[90%] flex'>
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
      ) : (
        <div className='h-screen flex items-center justify-center flex-col'>
          {/* <h1 className=' text-white animate-pulse text-2xl text-center max-md:px-2 max-md:text-lg'>
          "Hang tight!" Your favorite tuned are just moments away-just a few
          more seconds,and you'll be grooving.
        </h1> */}
          <p className='text-gray-400  animate-pulse text-2xl text-center max-md:px-2 max-xl:text-lg'>
            As a free user, please note that it might take &lt;50 seconds for
            our backend to start.
          </p>
          <StaggerLoading />
          <small className='text-gray-600 mt-5'>
            Loading animation made by Me~
          </small>
          <p className='text-white text-center mt-5'>
            In the mean time you can check the frontend version
          </p>
          <a
            className='bg-white mt-5 animate-pulse px-4 py-2 rounded-xl font-bold gap-1 flex items-center'
            href='https://asildev-spotifyfrontend.netlify.app/'
          >
            Link
            <img src={arrowleft} alt='' className='w-5' />
          </a>
        </div>
      )}
      <audio
        ref={audioRef}
        src={track ? track.file : ""}
        preload='auto'
      ></audio>
    </div>
  );
};

export default App;
