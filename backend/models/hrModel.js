const mongoose = require("mongoose");

const hrSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  hrName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
    default: "mnc",
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hr", hrSchema);
