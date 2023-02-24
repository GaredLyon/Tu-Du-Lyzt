const express = require('express') // IMPORTAMOS - EXPRESS
const router = express.Router() // USAMOS EN METODO ROUTER - EXPRESS

//IMPORTAMOS EL -> CONTROLADOR QUE HEMOS CREADO
const TareaControlador = require('../controllers/tarea')


//DEFINIMOS AQUI NUESTRAS RUTAS, INDICANDO LA RUTA, Y EL CONTROLADOR QUE LE CORRESPONDE
router.get('/task/:ultimos?', TareaControlador.conseguirTareas) //RUTA 1 - para traer toda la lista de tareas
router.post('/task', TareaControlador.crear) //RUTA 2 - para crear una nueva tarea
router.delete('/task/:id', TareaControlador.borrar) //RUTA 3 - para eliminar una tarea 
router.put('/task/:id', TareaControlador.actualizar) //RUTA 4 - para modificar/actualizar una tarea
router.get('/search/:busqueda', TareaControlador.buscador) //RUTA 5 - para devolver tareas en base a una busqueda por titulo o descripcion
router.put('/move/:id', TareaControlador.mover) //RUTA 5 - para devolver tareas en base a una busqueda por titulo o descripcion


//RUTA 6
//RUTA 7
//RUTA 8
//RUTA 9
//RUTA 10. ETC


//EXPORTAMOS EL ROUTER CREADO
module.exports = router

