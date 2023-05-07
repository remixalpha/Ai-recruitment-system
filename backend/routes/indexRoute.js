import express from "express";
import {
  indexController,
  testController,
} from "../controllers/indexController";
var router = express.Router();

router.get("/", indexController);
router.get("/test", testController);

export default router;
