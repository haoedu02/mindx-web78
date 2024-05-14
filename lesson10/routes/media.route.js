import { Router } from "express";
import { upload } from "../utils/upload.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
const mediaRoute = Router();

cloudinary.config({
  cloud_name: "dfnol2ud7",
  api_key: "781628927733649",
  api_secret: "-iiSkBnHJ1WMrj34IEC2v7YviGk",
  secure: true,
});

mediaRoute.post("/", upload.array("avatar", 4), async (req, res, next) => {
  try {
    const filenames = req.files;
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
    const images = await Promise.all(
      filenames.map((file) => {
        return cloudinary.uploader.upload(file.path, options);
      })
    );
    filenames.forEach((file) => {
      fs.unlinkSync(file.path);
    });
    const imagesUrl = images.map((file) => {
      return {
        url: file.secure_url,
      };
    });
    return res.json({
      images: imagesUrl,
    });
  } catch (error) {
    return res.json({ error });
  }
});

export default mediaRoute;
