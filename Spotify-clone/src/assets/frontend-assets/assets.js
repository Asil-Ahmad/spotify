import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import looping from "./looping.svg";
import notlooping from "./notlooping.svg";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import plays from "./plays.svg";
import pause_icon from "./pause.png";
import pauses from "./pauses.svg";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import speaker from "./speaker.svg";
import speakerx from "./speakerx.svg";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import arrowleft from "./arrowleft.svg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

import img13 from "./img13.jpg";
import img11 from "./img11.jpg";
import img12 from "./img12.jpg";

import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import song4 from "./song4.mp3";

export {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
  arrowleft,
  plays,
  pauses,
  looping,
  notlooping,
  speaker,
  speakerx
};

export const albumsData = [
  {
    id: 0,
    name: "Duke Dumont",
    image: img11,
    desc: "",
    bgColor: "#2a4365",
  },
  {
    id: 1,
    name: "Post Malone",
    image: img12,
    desc: "",
    bgColor: "#22543d",
  },
  {
    id: 2,
    name: "VØJ,Narvent",
    image: img13,
    desc: "",
    bgColor: "#742a2a",
  },

  {
    id: 3,
    name: "Closer",
    image: img4,
    desc: "",
    bgColor: "#234e52",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Ocean Drive",
    image: img3,
    file: song1,
    desc: "Duke Dumont",
    duration: "3:00",
  },
  {
    id: 1,
    name: "Sunflower",
    image: img1,
    file: song2,
    desc: "Post Malone",
    duration: "3:00",
  },
  {
    id: 2,
    name: "Memory Reboot",
    image: img2,
    file: song3,
    desc: "VØJ,Narvent",
    duration: "2:32",
  },
  {
    id: 3,
    name: "Closer",
    image: img4,
    file: song4,
    desc: "Frankmusik",
    duration: "2:50",
  },
];

export const navlinks = [
  { href: "All", link: "/" },
  { href: "Music", link: "/music" },
  { href: "Podcast", link: "/podcasts" },
];
