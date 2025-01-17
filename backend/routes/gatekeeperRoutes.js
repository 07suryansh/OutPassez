import express from "express";
import { updateEntryExitTime } from "../controllers/gatekeeperController.js";

const router = express.Router();

router.patch("/outpass/:id", updateEntryExitTime);

export default router;
