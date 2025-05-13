import filmModel from "../models/Film.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
  api_key: config.cloudinary.cloudinary_api_key,
  api_secret: config.cloudinary.cloudinary_api_secret,
});

const filmController = {};

filmController.getAllFilms = async (req, res) => {
  const posts = await filmModel.find();
  res.json(posts);
};

filmController.createFilm = async (req, res) => {
  try {
    const { title, description, filmDirector, gender, year, duration } = req.body;
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });
      imageUrl = result.secure_url;
    }
    const newFilm = new filmModel({  title, description, filmDirector, gender, year, duration, image: imageUrl });
    newFilm.save();

    res.json({ message: "film saved" });
  } catch (error) {
    console.log("error" + error);
  }
};

export default filmController;
