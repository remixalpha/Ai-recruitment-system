import express from "express";
var router = express.Router();

import { createHr, hrLogin, getHr } from "../controllers/hrController";

router.post("/", getHr);
router.post("/register", createHr);
router.post("/login", hrLogin);

export default router;
