import mongoose from "mongoose";

const gatekeeperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const Gatekeeper = mongoose.model("Gatekeeper", gatekeeperSchema);
export default Gatekeeper;
