import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ id, name, image, desc }) => {
  const navigate = useNavigate();

  return (
    <div
      className='min-w-[180px] hover:scale-105 transition-all duration-300 p-2 px-3 rounded-xl cursor-pointer hover:bg-[#ffffff26]'
      onClick={() => navigate(`/album/${id}`)}
    >
      <img className='rounded-full object-cover w-[200px]' src={image} alt='' />
      <p className='font-bold mt-2 mb-1 text-center'>{name}</p>
      
    </div>
  );
};

export default AlbumItem;
