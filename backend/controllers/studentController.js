import Outpass from "../models/outpassModel.js";

export const createOutpass=async(req,res)=>{
    try{
        const {studentId,purpose}=req.body;
        const newOutpass=new Outpass({studentId,purpose});
        await newOutpass.save();
        res.status(201).json({ message: "Outpass request created successfully.", outpass: newOutpass });
    } catch(error){
        res.status(500).json({error:error.message});
    }
};

export const getOutpasses=async(req,res)=>{
    try{
        const {id}=req.params;
        const outpasses=await Outpass.find({studentId:id}).populate("studentId", "name rollNumber");
        res.json(outpasses);
    } catch(error){
        res.status(500).json({error:error.message});
    }
};
