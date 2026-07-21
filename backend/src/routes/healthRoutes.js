import express from 'express';
import dotenv from 'dotenv';
import  {getHealth} from "../controllers/healthController.js";

dotenv.config();

const router = express.Router();
router.get('/', getHealth);
router.get('/db', getHealth);
export default router;