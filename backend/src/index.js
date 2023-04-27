const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

// Import controllers
const hrControllers = require("../controllers/hrController");
const userController = require("../controllers/userController");

const app = express();
// Allow requests from any origin
app.use(cors());
// Connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/Ai", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Routes
//app.post("/hr/register", hrControllers.registerHR);
app.post("/hr/login", hrControllers.loginHR);
//app.get("/hr/:hrId/profile", hrControllers.getHRProfile);
//app.put("/hr/:hrId/approve", hrControllers.approveHRAccount);
//app.post("/users/register", userController.register);
app.post("/users/login", userController.login);
//app.get("/users", userController.getUser);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
