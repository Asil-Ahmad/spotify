import React from "react";
import { useState } from "react";
import { upload_added, upload_area, upload_song } from "../assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddSong = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [song, setSong] = useState(false);
  const [image, setImage] = useState(false);
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault(); //it will not reload the webpage
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("audio", song);
      formData.append("album", album);

      const response = await axios.post(`${url}/api/song/add`, formData);
      if (response.data.success) {
        toast.success("Song Added");
        //after we get success it will reset the below
        setName("");
        setDesc("");
        setAlbum("none");
        setImage(false);
        setSong(false);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Error 404");
      console.log(error);
    }
    setLoading(false);
  };

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setAlbumData(response.data.albums);
      } else {
        toast.error("Unable to load albums data");
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };

  useEffect(() => {
    loadAlbumData();
  }, []);

  //adding loading so it can show if loading show this
  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div
        className='w-16 h-16 place-self-center border-4 border-gray-400
       border-t-green-800 rounded-full animate-spin'
      ></div>
    </div>
  ) : (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-start gap-8 text-gray-600'
    >
      <div className='flex gap-8'>
        <div className='flex flex-col gap-4'>
          <p>Upload Song</p>
          {/* accept="audio/*" to accept audio files */}
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type='file'
            id='song'
            accept='audio/*'
            hidden
          />
          <label htmlFor='song'>
            <img
              src={song ? upload_added : upload_song}
              alt=''
              className='w-24 cursor-pointer'
            />
          </label>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            accept='image/*'
            hidden
          />
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=''
              className='w-24 cursor-pointer'
            />
          </label>
        </div>
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Song name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='bg-transparent  outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          placeholder='Type Here..'
          type='text'
          required
        />
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          placeholder='Type Here..'
          type='text'
          required
        />
      </div>

      <div className='flex flex-col gap-2.5'>
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          value={album}
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'
        >
          <option value='none'>None</option>
          {albumData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type='submit'
        className='text-base bg-black text-white py-2.5 px-14 cursor-pointer '
      >
        ADD
      </button>
    </form>
  );
};

export default AddSong;
