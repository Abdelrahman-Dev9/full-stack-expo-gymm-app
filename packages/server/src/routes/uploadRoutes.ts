import express from "express";
import upload from "../middleware/upload"; // your multer + Cloudinary setup
import { uploadAvatar } from "../controllers/upload.controller";

const router = express.Router();

// POST /api/upload/avatar
// 'image' is the form field name for the file
router.post("/avatar", upload.single("image"), uploadAvatar);

export default router;
