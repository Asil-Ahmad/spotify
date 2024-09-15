import React, { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const ListSong = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState("");

  const fetchSongs = async () => { 
    try {
      const response = await axios.get(`${url}/api/song/list`);
      console.log(response.data);
      if (response.data.success) {
        setData(response.data.songs);
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  const deleteSong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });
      if (response.data.success) {
        toast.success("Song Deleted");
        await fetchSongs(); //when song is deleted it will refresh the page
      }
      console.log("Delete", id);
    } catch (error) {}
  };

  //useEffect will be excecuted whenever we reload the page becoz of >> []
  useEffect(() => {
    fetchSongs();
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
          <b>Duration</b>
          <b>Action</b>
        </div>
        {data.map(({ image, _id, name, album, duration }) => (
          <div
            key={_id}
            className='mt-5 grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr]
            items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 rounded-3xl'
          >
            <img src={image} alt='' className='w-12 rounded-xl' />
            <p>{name}</p>
            <p>{album}</p>
            <p>{duration}</p>
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

export default ListSong;
