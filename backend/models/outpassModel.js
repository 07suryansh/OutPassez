import mongoose from "mongoose";

const outpassSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  purpose: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  requestDate: { type: Date, default: Date.now },
  approvalDate: { type: Date },
  rejectionDate: { type: Date },
  entryTime: { type: Date },
  exitTime: { type: Date },
});

const Outpass = mongoose.model("Outpass", outpassSchema);
export default Outpass;
