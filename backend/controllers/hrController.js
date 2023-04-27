
const emailService = require('../services/emailService');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const HR = require("../models/hrModel");

const JWT_SECRET = process.env.JWT_SECRET;

const hrcontroller ={};
// Authenticate a HR
hrcontroller.loginHR = async (req, res, next) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;

    // Check if the user exists
    const hrUser = await HR.findOne({ email });
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
      status: 'success',
      message: 'HR user logged in successfully',
      token,
      data: hrUser,
    });
  }catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};















// handle HTTP POST request for HR registration
/* exports.registerHR = async (req, res, next) => {
  try {
    const { companyName, hrName, email, password, companyType } = req.body;
    // validate input data
    // ...
    // save HR data to database
    const newHR = await HR.create({ companyName, hrName, email, password, companyType });
    // send email notification to developer
    emailService.sendRegistrationNotification(newHR);
    res.status(201).json({
      status: 'success',
      message: 'HR user registered successfully',
      data: newHR,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};


























// handle HTTP GET request for HR profile
exports.getHRProfile = async (req, res, next) => {
  try {
    const hrUser = await HR.findById(req.params.hrId);
    if (!hrUser) {
      res.status(404).json({
        status: 'fail',
        message: 'HR user not found',
      });
      return;
    }
    res.status(200).json({
      status: 'success',
      message: 'HR user profile retrieved successfully',
      data: hrUser,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// handle HTTP PUT request for approving HR account by developer
exports.approveHRAccount = async (req, res, next) => {
  try {
    const hrUser = await HR.findById(req.params.hrId);
    if (!hrUser) {
      res.status(404).json({
        status: 'fail',
        message: 'HR user not found',
      });
      return;
    }
    // update HR account with developer approval
    // ...
    res.status(200).json({
      status: 'success',
      message: 'HR account approved successfully',
      data: hrUser,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// handle HTTP GET request for retrieving all HR users
exports.getAllHR = async (req, res, next) => {
  try {
    const allHR = await HR.find();
    res.status(200).json({
      status: 'success',
      message: 'All HR users retrieved successfully',
      data: allHR,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// handle HTTP PUT request for updating HR user information
exports.updateHR = async (req, res, next) => {
  try {
    const updatedHR = await HR.findByIdAndUpdate(req.params.hrId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedHR) {
      res.status(404).json({
        status: 'fail',
        message: 'HR user not found',
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: 'HR user updated successfully',
        data: updatedHR,
      });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
*/


module.exports = hrcontroller;
