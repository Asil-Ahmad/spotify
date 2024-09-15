import React, { useContext } from "react";
import Navbar from "./Navbar";
import SongItem from "./SongItem";
import { songsData } from "../assets/frontend-assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Music = () => {
  const { songsData } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className='px-2'>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Top Musics</h1>
          <div className='flex overflow-auto'>
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
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
          <div className='flex overflow-auto'>
            {songsData
              .slice(0, 4)
              .map(({ _id, name, image, desc, file, duration }) => (
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

export default Music;
