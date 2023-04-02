const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// Import controllers
const hrControllers = require("../controllers/hrController");
const userController = require("../controllers/userController");

const app = express();

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post("/hr/register", hrControllers.registerHR);
app.post("/hr/login", hrControllers.loginHR);
app.get("/hr/:hrId/profile", hrControllers.getHRProfile);
app.put("/hr/:hrId/approve", hrControllers.approveHRAccount);
app.post("/user/register", userController.register);
app.post("/user/login", userController.login);
app.get("/user", userController.getUser);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
