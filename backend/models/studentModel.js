import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const Student=mongoose.model("Student",studentSchema);
export default Student;