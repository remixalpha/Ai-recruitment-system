import UserModel from "../models/userModel";
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

export const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, resume } = req.body;

    // Check if the email is already in use
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Email is already in use" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user object
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      resume,
    });

    // Save the user to the database
    await newUser.save();

    res
      .status(201)
      .json({ status: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const users = await UserModel.findOne({ email });
    if (!users) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, users.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // console.log({ passwordMatch: passwordMatch });

    // Generate a JWT token
    const token = jwt.sign({ userId: users._id }, JWT_SECRET);
    console.log(token);

    res.status(200).json({
      message: "Authentication successful",
      token,
      doc: users._id,
    });
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err", error });
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = await UserModel.findById(userId).select(
      "firstName lastName email resume "
    );
    if (!user) {
      return res.status(404).json({ message: "UserCollection not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ status: false, msg: "catch err" });
  }
};
