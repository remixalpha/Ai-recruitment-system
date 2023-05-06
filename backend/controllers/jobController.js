const jobCollection = require("../models/jobmodel");
const jobController = {};
jobController.createJob = async (req, res, next) => {
  try {
    const { jobName, desc, salary, categories } = req.body;

    console.log(req.body);
    // req.body.Image = req.file.path;
    const newjob = new jobCollection({
      jobName,
      desc,
      categories,
      salary,
    });

    // Save the user to the database
    await newjob.save();

    res.status(200).json({
      status: true,
      doc: newjob,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
jobController.getAll = async (req, res, next) => {
  console.log(req.body);

  try {
    const doc = await jobCollection.find();

    res.status(200).json({
      status: true,
      doc: doc,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
jobController.getById = async (req, res, next) => {
  console.log(req.body);

  try {
    // const { hrId } = req.body;
    const doc = await jobCollection.find(req.body);

    res.status(200).json({
      status: true,
      doc: doc,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = jobController;
