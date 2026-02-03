import { Request, Response } from "express";
import prisma from "../config/prisma";

export const uploadAvatar = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // multer-storage-cloudinary adds the Cloudinary URL as `req.file.path`
    const avatarUrl = (req.file as any).path;

    // Parse userId from form-data body (should be sent by client)
    const userId = Number(req.body.userId);

    if (!userId) {
      return res.status(400).json({ message: "Missing or invalid userId" });
    }

    // Update user avatar URL in database
    const user = await prisma.user.update({
      where: { id: userId },
      data: { avatar: avatarUrl },
    });

    return res.json({ message: "Upload successful", avatarUrl, user });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
