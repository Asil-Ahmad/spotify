import React, { useContext } from "react";
import Navbar from "./Navbar";
//import { albumsData, songsData } from "../assets/frontend-assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);
  

  return (
    <>
      <Navbar />
      <div className='px-2 overflow-auto'>
        <div className='mb-4'>
          <h1 className='mt-5 font-bold text-2xl'>Featured Artist</h1>
          <div className='md:px-2 py-5 flex overflow-x-auto'>
            {albumsData.map(({ _id, name, image, desc, bgColor }) => (
              <AlbumItem
                key={_id}
                id={_id}
                name={name}
                image={image}
                desc={desc}
                bgColor={bgColor}
              />
            ))}
          </div>
        </div>

        <div className=''>
          <h1 className='my-4 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='flex overflow-x-auto'>
            {songsData.map(({ _id, name, image, desc, file, duration }) => (
              <SongItem
                key={_id}
                id={_id}
                name={name}
                image={image}
                desc={desc}
                file={file}
                duration={duration}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
