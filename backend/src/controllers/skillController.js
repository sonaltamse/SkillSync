import Skill from "../models/Skills.js";

export const createSkill = async (req, res) => {
    try {
        const { name, description, level } = req.body;
        const skill = new Skill({ name, description, level });
        await skill.save();
        res.status(201).json(skill);
    } catch(error){
        console.error("Error creating skill:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllSkills = async (req, res) => {
    try{
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch(error){
        console.error("Error fetching skills:", error);
        res.status(500).json({ message: "Internal server error" });   
    }
};

export const getSkillById = async(req, res) =>{
    try{
        const skill = await Skill.findById(req.params.id);
        if(!skill){
            return res.status(404).json({error: "Skill not found"});
    }
}catch(error){
    console.error("Error fetching skill:", error);
    res.status(500).json({ message: "Internal server error" });
}
};

export const updateSkill = async (req, res) => {
    try {
        const { name, description, level } = req.body;
        const skill = await Skill.findByIdAndUpdate(req.params.id, { name, description, level }, { new: true });
        if(!skill) return res.status(404).json({ error: "Skill not found" });
    }catch(error){
        console.error("Error updating skill:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteSkill = async (req, res) => {
    try{
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if(!skill) return res.status(404).json({ error: "Skill not found" });
        res.status(404).json({ message: "Skill deleted successfully" });
    }catch(error){
        console.error("Error deleting skill:", error);
        res.status(500).json({error: "Internal server error"});        
    }
};