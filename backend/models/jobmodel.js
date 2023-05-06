const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  categories: { type: String, required: true },
  desc: { type: String, required: true },
  salary: { type: String, require: true, default: "10000" },
});

const job = mongoose.model("job", jobSchema);

module.exports = job;
