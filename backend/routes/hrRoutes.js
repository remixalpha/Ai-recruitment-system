const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController');

// Route to register a new HR user
router.post('/register', hrController.register);

// Route to login as an HR user
router.post('/login', hrController.login);

// Route to get details of a single HR user
router.get('/:id', hrController.getDetails);

module.exports = router;
