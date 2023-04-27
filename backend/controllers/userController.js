const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const User = require("../models/userModel");

const userController = {};




// Authenticate a user
userController.login = async (req, res,next) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;

    // Check if the user exists
    const users = await User.findOne({ email });
    if (!users) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, users.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: users._id },secret );

    res.status(200).json({ message: "Authentication successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};










// Register a new user
/* userController.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, resume } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user object
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      resume,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};






// Get user details
userController.getUser = async (req, res) => {
  try {
    const { userId } = req;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};*/

module.exports = userController;
