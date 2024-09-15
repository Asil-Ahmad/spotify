import {
  addSong,
  listSong,
  removeSong,
} from "../controllers/songController.js";

import express from "express";
import upload from "../middleware/multer.js";

const songRouter = express.Router();
//with this router we can create multiple router

songRouter.post(
  "/add",
  upload.fields([
    //here we get multiple files
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSong);
//when we need to add song the full url is /api/song/add this /api/song coming from server.js
//when we need to list song the full url is /api/song/list this /api/song coming from server.js
songRouter.post("/remove", removeSong);

export default songRouter;
