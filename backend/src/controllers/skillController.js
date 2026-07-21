import Skill from "../models/Skills.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createSkill = asyncHandler(async (req, res) => {
        const { name, description, level } = req.body;
        const skill = new Skill({ name, description, level });
        await skill.save();
        res.status(201).json(skill);
});

export const getAllSkills = asyncHandler(async (req, res) => {
        const skills = await Skill.find();
        res.status(200).json(skills);    
});

export const getSkillById = asyncHandler(async(req, res) =>{
        const skill = await Skill.findById(req.params.id);
        if(!skill){
            return res.status(404).json({error: "Skill not found"});
        }
        res.status(200).json(skill);
    });

export const updateSkill = asyncHandler(async (req, res) => {
        const { name, description, level } = req.body;
        const skill = await Skill.findByIdAndUpdate(req.params.id, { name, description, level }, { new: true });
        if(!skill) return res.status(404).json({ error: "Skill not found" });
});

export const deleteSkill = asyncHandler(async (req, res) => {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if(!skill) return res.status(404).json({ error: "Skill not found" });
        res.status(200).json({ message: "Skill deleted successfully" });
});