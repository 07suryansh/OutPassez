import Outpass from "../models/outpassModel.js";

export const updateOutpassStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Approved", "Rejected"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Invalid status. Must be 'Approved' or 'Rejected'." });
    }

    const updateFields = {
      status,
      approvalDate: status === "Approved" ? new Date() : undefined,
      rejectionDate: status === "Rejected" ? new Date() : undefined,
    };

    const updatedOutpass = await Outpass.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedOutpass) {
      return res.status(404).json({ message: "Outpass not found." });
    }

    res.json({
      message: `Outpass ${status.toLowerCase()} successfully.`,
      outpass: updatedOutpass,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllRequests=async(req,res)=>{
    try{
        const requests=await Outpass.find().populate("studentId","name rollNumber");
        res.json(requests);
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};