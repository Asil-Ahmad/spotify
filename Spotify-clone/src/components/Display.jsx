import React, { useContext, useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import SongItem from "./SongItem";
import Music from "./Music";
import Podcasts from "./Podcast";
import CreatePlaylist from "./CreatePlaylist";
import MusicPlayer from "./MusicPlayer";

const Display = () => {
  const displayRef = useRef();
  const { albumsData } = useContext(PlayerContext);
  const location = useLocation();
  // console.log("location", location);
  const isAlbum = location.pathname.includes("album");
  //console.log("isAlbum", isAlbum);

  const albumId = isAlbum ? location.pathname.split("/").pop() : ""; //we doing this for backend data
  // const albumId = isAlbum ? location.pathname.slice(-1) : "";
  //slice(-1) returns the last digit of the pathname if /album/0 it will return 0 if /01 it will return 1
  // console.log("ALbumID", albumId);

  const bgColor =
    isAlbum && albumsData.length > 0
      ? albumsData.find((x) => x._id == albumId).bgColor
      : "#121212";
  // const bgColor = albumsData[Number(albumId)].bgColor;
  // console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [location]);

  return (
    <div
      ref={displayRef}
      className='w-full px-6 max-sm:px-0 pt-5 max-sm:pt-0 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      {albumsData.length > 0 ? (
        <Routes>
          <Route path='/' element={<DisplayHome />} />
          <Route
            path='/album/:id'
            element={
              <DisplayAlbum album={albumsData.find((x) => x._id == albumId)} />
            }
          />
          <Route path='/music' element={<Music />} />
          <Route path='/podcasts' element={<Podcasts />} />
          <Route path='/create_playlist' element={<CreatePlaylist />} />
          <Route path='/music_player/:id' element={<MusicPlayer />} />
          {/* ABove is for test */}
        </Routes>
      ) : null}
    </div>
  );
};

export default Display;
