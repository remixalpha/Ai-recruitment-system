import express from "express";
var router = express.Router();

import { LoginUser, createUser, getUser } from "../controllers/userController";

router.post("/", getUser);
router.post("/register", createUser);
router.post("/login", LoginUser);

export default router;
