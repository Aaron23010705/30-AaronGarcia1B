import express from "express";
import multer from "multer";
import filmController from "../controllers/FilmController.js";

const router = express.Router();

//Configurar una carpeta en local que guarde las imagenes
const upload = multer({ dest: "public/" });

router
  .route("/")
  .get(filmController.getAllFilms)
  .post(upload.single("image"), filmController.createFilm);

export default router;
