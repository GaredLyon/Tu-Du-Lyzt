import express from 'express';
import { createTask, getTasks,deleteTask ,updateTask} from '../controllers/taskController.js';
import { createTaskValidation } from '../validations/taskValidations.js';
const router = express.Router();

router.get('/',getTasks)
router.post('/create',createTaskValidation, createTask);
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask);


export default router