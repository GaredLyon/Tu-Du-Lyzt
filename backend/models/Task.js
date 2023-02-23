import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim:true,
        maxlength: 25,
    },
    descripcion: {
        type: String,
        required: true,
        trim:true,
        maxlength: 500,
    },
    nivel:{
        type: String,
        required: true,
    },
    estado: {
        type: String,
        default: 'Todo',
    },
    creado: {
        type: Date,
        default: Date.now,
    }

},{toJSON:{transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
}}});

const TaskModel = mongoose.model("Task", TaskSchema);
export default TaskModel;