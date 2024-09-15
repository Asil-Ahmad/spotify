import React, { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListAlbum = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState("");

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      console.log(response.data);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  const deleteSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success("Song Deleted");
        await fetchAlbums(); //when song is deleted it will refresh the page
      }
      console.log("Delete", id);
    } catch (error) {}
  };

  //useEffect will be excecuted whenever we reload the page becoz of >> []
  useEffect(() => {
    fetchAlbums();
  }, []);
  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div
          className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]
         items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100 rounded-3xl'
        >
          <b>Image</b>
          <b>Name</b>
          <b>Album</b>
          <b>Color</b>
          <b>Action</b>
        </div>
        {data.map(({ image, _id, name, desc, bgColor }) => (
          <div
            key={_id}
            className='mt-5 grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]
            items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 rounded-3xl'
          >
            <img src={image} alt='' className='w-12 rounded-xl' />
            <p>{name}</p>
            <p>{desc}</p>
            <div className='size-5' style={{ background: `${bgColor}` }}></div>

            <button
              className='hover:bg-red-500 hover:scale-125 rounded-full size-7'
              onClick={() => deleteSong(_id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListAlbum;
