import express from 'express'
import { generateShortUrl } from './Controller/controller.js';

const router = express.Router();

router.post("/", generateShortUrl);

export default router;