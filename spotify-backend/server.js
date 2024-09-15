import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
//we add our port number,if port is not present we do ||
connectDB(); //for connect mongoDB from config
connectCloudinary(); //for connect cloudinary from config

//middlewares
app.use(express.json());
//this tells your web server to automatically understand json data,if someone send data in json format this line
//makes sure it can read and understand that data
app.use(cors());
//this helps to connect front with backend,we dont want one run on different port

//initialzing routes
app.get("/", (req, res) => res.send("API Working"));

app.use("/api/song", songRouter);
//when we need to add song the full url is /api/song/add add is in songRoute.js
//when we need to list song the full url is /api/song/list list is in songRoute.js

app.use("/api/album", albumRouter);

//now we will start our express app
app.listen(port, () => console.log(`Server started on ${port}`));
