import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const getTime = (time) => {
    if (isNaN(time)) return "--";
    if (isNaN(Number(time))) return "--";
    let t = Math.floor(time).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    if (isNaN(t)) return "--";
    else return t;
  };

  const initTime = getTime(0);

  const [track, setTrack] = useState(songsData[1]);
  //whenever we load song our default will be first song
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: initTime,
      minute: initTime,
    },
    totalTime: {
      second: initTime,
      minute: initTime,
    },
  });

  //creating function for play

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  //here we play songs according to the song id
  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  //next prev

  const prev = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  //seek song for drag seekbar

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
    console.log(e);
  };

  //here shows time and seekbar increase as music goes
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        let ct = audioRef.current.currentTime;
        if (ct === NaN) ct = 0;

        let duration = audioRef.current.duration;
        if (duration === NaN) duration = 0;

        let progress = 0;
        if (duration > 0) progress = ct / duration;
        else progress = 0;
        seekBar.current.style.width = Math.floor(progress * 100) + "%";

        let newState = {
          currentTime: {
            second: getTime(ct % 60),
            minute: getTime(ct / 60),
          },
          totalTime: {
            second: getTime(duration % 60),
            minute: getTime(duration / 60),
          },
        };
        setTime(newState);
      };
    }, 1000);
  }, [audioRef]);

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
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
