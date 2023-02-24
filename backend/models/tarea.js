//IMPORTAMOS -> SCHEMA Y MODEL DE MOONGOSE
const {Schema, model} = require('mongoose')

/* 
/CREAMOS LAS ESTRUCTURA DE NUESTRO MODELO,
INDICANDO EL TIPO DE VALOR, EL VALOR POR DEFECTO, SI ES OBLIGATORIO.ETC
*/
const TareaSchema = Schema({
  title: {
    type: String,
    default: 'Titulo de ejemplo',
    required: true
  },
  description: {
    type: String,
    default: 'Descripcion de ejemplo',
    required: true
  },
  priority: {
    type: String,
    default: "Middle",
    enum: ['high', 'middle', 'low'],
    required: true
  },
  state: {
    type: String,
    default: 'Progress',
    enum: ['progress', 'completed', 'pendient'],
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
})

/* 
EXPORTAMOS:
1. NOMBRE QUE LE DAMOS AL ESQUEMA
2. A CUAL SCHEMA ESTA RELACIONADO
3. COMO LLAMAR AL CONJUNTO DE ESTAS, EL NOMBRE DE LA COLECCION EN MONGODB (OPCIONAL)
*/
module.exports = model('Tarea', TareaSchema, 'tareas')
