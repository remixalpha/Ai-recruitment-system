const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to register a new user
router.post('/register', userController.register);

// Route to login as a user
router.post('/login', userController.login);

// Route to get details of a single user
router.get('/:id', userController.getDetails);

module.exports = router;
