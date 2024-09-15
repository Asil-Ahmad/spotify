import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import {
  albumsData,
  arrow_left,
  clock_icon,
  songsData,
  spotify_logo,
} from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = ({ album }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState("");
  // const albumData = albumsData[id];
  const { playWithId, songsData, albumsData } = useContext(PlayerContext);
  //we need only one album data do we added an array with id
  //   console.log(albumData);

  useEffect(() => {
    albumsData.map((item) => {
      if (item._id === id) {
        setAlbumData(item);
      }
    });
  }, []);
  return albumData ? (
    <>
      <div className='transition-all duration-300 flex gap-8 max-md:gap-4 flex-col md:flex-row md:items-center relative '>
        <img
          className='w-48 max-md:w-full rounded-full max-md:rounded-none  '
          src={albumData.image}
          alt=''
        />
        <button className='absolute top-0 max-sm:top-5 max-sm:left-5 ' onClick={() => navigate(-1)}>
          <img src={arrow_left} alt='arrow left' className='w-7 p-1 bg-black rounded-full  ' />
        </button>
        <div className='flex flex-col flex-wrap px-1'>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1 flex items-center'>
            <img className='inline-block w-5 mr-2' src={spotify_logo} alt='' />
            <b>Spotify</b>
            &bull; 1,000 likes &bull;{" "}
            <b>
              {songsData.filter((item) => item.album === album.name).length}{" "}
              songs
            </b>
            <span className='hidden sm:flex'>&nbsp;About 2 hr 30 min</span>
            {/* {console.log("This", songsData.length)} */}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-5 bm-4 pl-2 text-[#a7a7a7] '>
        <p>
          <b className='mr-4'>#</b>
        </p>
        <p>Songs</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={clock_icon} alt='' />
      </div>
      <hr />
      {songsData
        .filter((item) => item.album === album.name)
        .map((item, index) => (
          <div
            key={index}
            onClick={() => playWithId(item._id)}
            className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7]
        hover:bg-[#ffffff2b] cursor-pointer transition-all duration-150'
          >
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img className='inline-block w-10 mr-5' src={item.image} alt='' />
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
            <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))}
    </>
  ) : null;
};

export default DisplayAlbum;
