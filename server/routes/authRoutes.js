import express from "express";
import { upload } from "../middleware/upload.js";
import { uploadResume, analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), uploadResume);
router.post("/analyze", analyzeResume);

export default router;