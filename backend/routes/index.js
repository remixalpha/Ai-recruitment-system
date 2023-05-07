import express from "express";
var router = express.Router();

import indexRoute from "./indexRoute";
import UserRoute from "./userRoute";
import HrRoute from "./hrRoute";
import jobRoute from "./jobRoute";

router.use("/", indexRoute);
router.use("/users", UserRoute);
router.use("/hr", HrRoute);
router.use("/job", jobRoute);

export default router;
