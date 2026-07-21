import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    level: {type: String, enum: ["Beginner", "Intermediate", "Advanced"], required: true},
}, {timestamps: true});

const Skill = mongoose.model("Skill",skillSchema);
export default Skill;