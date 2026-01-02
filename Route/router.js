import express from "express";
import {
  generateShortUrl,
  handleGetAnalytics,
} from "../Controller/controller.js";

const router = express.Router();

router.post("/", generateShortUrl);
router.get("/analytics/:shortID", handleGetAnalytics);

export default router;
