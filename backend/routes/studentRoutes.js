import express from "express";
import { createOutpass, getOutpasses } from "../controllers/studentController.js";


const router = express.Router();

router.post("/outpass", createOutpass);
router.get("/:id/outpasses", getOutpasses);

export default router;
