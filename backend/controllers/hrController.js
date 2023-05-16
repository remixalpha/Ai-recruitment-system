import HrModel from "../models/hrModel";
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
export const createHr = async (req, res, next) => {
  try {
    const { companyName, hrName, email, password, companyType } = req.body;
    // validate input data
    // ...
    // save HR data to database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newHR = await HrModel.create({
      companyName,
      hrName,
      email,
      password: hashedPassword,
      companyType,
    });
    // send email notification to developer

    // emailService.sendRegistrationNotification(newHR);
    res.status(201).json({
      status: true,
      message: "HR user registered successfully",
      data: newHR,
    });
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err", error: error });
  }
};

export const hrLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const hrUser = await HrModel.findOne({ email });
    if (!hrUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // check if password is correct
    const passwordMatch = await bcrypt.compare(password, hrUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ hrId: hrUser._id }, JWT_SECRET);

    res.status(200).json({
      status: "success",
      message: "HR user logged in successfully",
      token,
      doc: hrUser._id,
    });
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};
export const getHr = async (req, res, next) => {
  try {
    const { HrId } = req.body;
    const hr = await HrModel.findById(userId).select(
      "companyName hrName email password companyType "
    );
    if (!hr) {
      return res.status(404).json({ message: "hr not found" });
    }

    res.status(200).json({doNotTrack:hr});
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};
