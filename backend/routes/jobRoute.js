import express from "express";
var router = express.Router();

import {
  createData,
  getData,
  ApplyJob,
  ApproveJob,
  getApplication,
} from "../controllers/jobController";
import uploader from "../controllers/imageController";

router.post("/", getData);
router.post("/register", uploader, createData);
router.post("/apply", ApplyJob);
router.post("/get", getApplication);
router.post("/approve", ApproveJob);

export default router;
