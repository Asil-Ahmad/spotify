import { createContext, useEffect, useRef, useState } from "react";
//import { songsData } from "../assets/frontend-assets/assets";
import axios from "axios";
//we were getting songsData from the assets but now we need it from api

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const seekVolumeBg = useRef();
  const seekVolumeBar = useRef();
  const loop = useRef();

  const url = "https://spotify-backend-service.onrender.com"; //to get data from backend
  // const url = "http://localhost:4000";

  //we need two state vairable to store songsData and albumData
  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [track, setTrack] = useState(songsData[0]);
  //whenever we load song our default will be first song
  const [playStatus, setPlayStatus] = useState(false);

  const [isLoop, setIsLoop] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: "00",
      minute: 0,
    },
    totalTime: {
      second: "00",
      minute: 0,
    },
  });

  //get song data and album data
  //after creating backend and admin
  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      // console.log("This is SongsData", response.data.songs);
      setTrack(response.data.songs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //get album data

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumsData(response.data.albums);
    } catch (error) {
      console.log(error);
    }
  };

  //creating function for play

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
    console.log(audioRef);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  //here we play songs according to the song id
  const playWithId = async (id) => {
    await songsData.map((item) => {
      if (id === item._id) {
        setTrack(item);
      }
    });
    await audioRef.current.play();
    setPlayStatus(true);
  };

  //next prev

  const prev = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index > 0) {
        await setTrack(songsData[index - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
    // if (track.id > 0) {
    //   await setTrack(songsData[track.id - 1]);
    //   await audioRef.current.play();
    //   setPlayStatus(true);
    // }
  };

  const next = async () => {
    songsData.map(async (item, index) => {
      if (track._id === item._id && index < songsData.length - 1) {
        await setTrack(songsData[index + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    });
    // if (track.id < songsData.length - 1) {
    //   await setTrack(songsData[track.id + 1]);
    //   await audioRef.current.play();
    //   setPlayStatus(true);
    // }
  };

  //seek song for drag seekbar and onclick
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
    console.log(e);
  };

  //this a onclick button for volume div
  const volumeSeek = (e) => {
    audioRef.current.volume =
      e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth;
    audioRef.current.draggable = true;

    console.log("volume=", e);
  };
  //onCLick button for loop it will turn red also
  const loopButton = () => {
    const audioElement = audioRef.current;   // Toggle loop state
    audioElement.loop = !isLoop;
    setIsLoop(!isLoop);// Update loop state

    // Change button background nelow
    // if (loop.current) {
    //   loop.current.style.background = !isLoop ? "red" : "none";
    // }
  };

  //here shows time and seekbar increase as music goes
  useEffect(() => {
    const audio = audioRef.current;
    // console.log(audioRef);

    if (!audio) return; //if audio is null

    const handleTimeUpdate = () => {
      const { currentTime, duration, volume } = audio; //we have destructure the both...
      if (isNaN(currentTime) || isNaN(duration) || duration === 0) return;

      seekBar.current.style.width =
        Math.floor((currentTime / duration) * 100) + "%"; //this increase seekbar as time goes

      seekVolumeBar.current.style.width = volume / 0.01 + "%"; //this increase vol on click

      setTime({
        currentTime: {
          second: Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0"),
          minute: Math.floor(currentTime / 60),
        },
        totalTime: {
          second: Math.floor(duration % 60),
          minute: Math.floor(duration / 60),
        },
      });
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef]);

  //we calling this after we created backend data and getting data
  useEffect(() => {
    getSongsData();
    getAlbumsData();
  }, []);

  //this is must so u can use there values outside
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    prev,
    next,
    seekSong,
    volumeSeek,
    seekVolumeBg,
    seekVolumeBar,
    loop,
    loopButton,
    isLoop,
    setIsLoop,
    //added after backend and admin
    songsData,
    albumsData,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
