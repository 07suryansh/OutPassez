import Outpass from "../models/outpassModel.js";

export const updateEntryExitTime = async (req, res) => {
  try {
    const { id } = req.params;
    const { entryTime, exitTime } = req.body;

    const outpass = await Outpass.findById(id);

    if (!outpass) {
      return res.status(404).json({ message: "Outpass not found." });
    }

    if (outpass.status !== "Approved") {
      return res
        .status(400)
        .json({ message: "Outpass is not approved by the warden." });
    }

    outpass.entryTime = entryTime || outpass.entryTime;
    outpass.exitTime = exitTime || outpass.exitTime;

    await outpass.save();
    res.json({ message: "Entry/Exit time updated successfully.", outpass });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
