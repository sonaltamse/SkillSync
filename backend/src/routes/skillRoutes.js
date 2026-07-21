import express from 'express';
import dotenv from 'dotenv';
import {createSkill, getAllSkills, getSkillById, updateSkill, deleteSkill} from "../controllers/skillController.js";

dotenv.config();

//get the router
const router = express.Router();

router.post('/', createSkill);
router.get('/', getAllSkills);
router.get('/:id', getSkillById);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;