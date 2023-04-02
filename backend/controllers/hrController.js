const HR = require('../models/hrModel');
const emailService = require('../services/emailService');

// handle HTTP POST request for HR registration
exports.registerHR = async (req, res, next) => {
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

// handle HTTP GET request for HR login
exports.loginHR = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validate input data
    // ...
    // find HR data in database
    const hrUser = await HR.findOne({ email });
    // check if password is correct
    // ...
    res.status(200).json({
      status: 'success',
      message: 'HR user logged in successfully',
      data: hrUser,
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
