import React, { useState } from "react";
import { upload_area } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../App";

const AddAlbum = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [loading, setLoading] = useState(false);

  const submitHandle = async (e) => {
    e.preventDefault(); //it will not reload the webpage
    setLoading(true);
    try {
      const formData = new FormData(); 

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("bgColor", color);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success("Album Added");
        //after we get success it will reset the below
        setName("");
        setDesc("");
        setImage(false);
        setColor("");
      } else {
        toast.error("Something went wrong.");
        console.log(error);
      }
    } catch (error) {
      toast.error("Error 404");
      console.log(error);
    }
    setLoading(false);
  };

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div
        className='w-16 h-16 place-self-center border-4 border-gray-400
   border-t-green-800 rounded-full animate-spin'
      ></div>
    </div>
  ) : (
    <form className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex flex-col gap-4'>
        <p>Upload Image</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type='file'
          name='image'
          id='image'
          accept='image/*'
          hidden
        />
        <label htmlFor='image'>
          <img
            className='w-24 cursor-pointer'
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=''
          />
        </label>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album name</p>
        <input
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          type='text'
          id='text'
          placeholder='Type here'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album description</p>
        <input
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          type='text'
          id='text'
          value={desc}
          placeholder='Type here'
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Background Color</p>
        <input
          type='color'
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </div>

      <button
        className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'
        type='button'
        onClick={submitHandle}
      >
        ADD
      </button>
    </form>
  );
};

export default AddAlbum;
