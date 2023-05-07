const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: mongoose.Schema.Types.ObjectId, ref: "Hr", required: true },
  approved: { type: Boolean, default: false, required: true },
});

export default mongoose.model("Application", ApplicationSchema);
