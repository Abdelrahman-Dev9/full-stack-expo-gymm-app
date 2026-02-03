import express from "express";
import authRoutes from "./routes/auth.routes";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

export default app;
