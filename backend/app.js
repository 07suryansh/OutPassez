import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import wardenRoutes from "./routes/wardenRoutes.js";
import gatekeeperRoutes from "./routes/gatekeeperRoutes.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/warden", wardenRoutes);
app.use("/api/gatekeeper", gatekeeperRoutes);
app.use("/api/user",userRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
