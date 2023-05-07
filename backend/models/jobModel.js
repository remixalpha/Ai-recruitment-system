const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobName: { type: String, required: true },
  categories: { type: String, required: true },
  desc: { type: String, required: true },
  salary: { type: String, require: true, default: "10000" },
  CreatedHr: { type: String, require: true },
});

export default mongoose.model("Job", jobSchema);
