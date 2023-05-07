import express from "express";
var router = express.Router();

import { createData, getData } from "../controllers/jobController";
import uploader from "../controllers/imageController";

router.post("/", getData);
router.post("/register", uploader, createData);

export default router;
