//using these function we will create the addsong and listsong API
import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";
import upload from "../middleware/multer.js";

const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0]; //why we used files? becoz there are files not text there are in mb size
    const imageFile = req.files.image[0];
    //now we have to upload the above files in cloud
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`; //this will convert durations in minutes:seconds
    //we can upload audio and images in cloudinary but we dont have resource type in cloudinary
    //u can check thunderclient post request http://localhost:4000/api/song/add
    
    // console.log(name,desc,album,audioUpload,imageUpload);
    const songData = {
      name,
      desc,
      album,
      file: audioUpload.secure_url,
      image: imageUpload.secure_url,
      duration,
    };
    //Now save the above data in database
    const song = songModel(songData);
    await song.save();

    res.json({ success: true, message: "Song added" }); //we need response to if data success
  } catch (error) {
    res.json({ success: false, message: "Song failed to add" });
  }
};

const listSong = async (req, res) => {
  try {
    const allSongs = await songModel.find({}); // empty object so that we can get all the data
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Song removed" });
  } catch (error) {
    res.json({ success: false });
  }
};

export { addSong, listSong, removeSong };
