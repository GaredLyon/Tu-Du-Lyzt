import TaskModel from "../models/Task.js";
import {body, validationResult} from 'express-validator';
//TODO: Validations (choose library)
//FIXME: Error handling and exist validations
//

export const createTask = async (req, res) => {

    const { titulo, descripcion, estado, nivel } = req.body;
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        return res.status(400).json({ errors: validationErrors.array() });
    }

    try {
        const newTask ={
            titulo,
            descripcion,
            estado,
            nivel
        };

        const task = await TaskModel.create(newTask);
        res.json(task);
    } catch (error) {
        console.log(error);
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (req, res) => {
    const { titulo, descripcion, estado, nivel } = req.body;
    try {
    
        const task = await TaskModel.findOne({id: req.params.id});
        task.titulo = titulo;
        task.descripcion = descripcion;
        task.estado = estado;
        task.nivel = nivel;
        await task.save();

        res.json(task);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req, res) => {
    console.log(req.params.id)
    try {
        const task = await TaskModel.deleteOne({id: req.params.id});
        res.json(req.params.id);
    } catch (error) {
        console.log(error);
    }
}

