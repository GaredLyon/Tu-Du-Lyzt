import { body } from "express-validator";

export const createTaskValidation = [
    body("titulo").notEmpty().withMessage("El titulo no puede estar vacio").trim().isLength({max: 25}).withMessage("El titulo no puede tener mas de 25 caracteres"),
    body("descripcion").notEmpty().trim().withMessage("La descripcion no puede estar vacia"),
    body("nivel").notEmpty().trim().withMessage("El nivel no puede estar vacio"),
];