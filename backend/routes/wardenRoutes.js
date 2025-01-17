import express from "express";
import { updateOutpassStatus,getAllRequests } from "../controllers/wardenController.js";

const router=express.Router();

router.patch("/outpass/:id",updateOutpassStatus);
router.get("/outpasses",getAllRequests);

export default router;