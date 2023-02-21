const {conexion} = require('./data/conexion') //IMPORTAR ARCHIVO - MONGOOSE
conexion() //EJECUTANDO LA CONEXION -  MONGOOSE

///////////////////////////////////////////////
const express = require('express') // IMPORTARLO - EXPRESS
const app = express() //CREAR LA APP - EXPRESS
app.use(express.json()) //para convertir body a objeto js - EXPRESS
app.use(express.urlencoded({extended:true})) //para convertir form-urlencoded a json - EXPRESS
// app.use(express.static('public')) // establecer la carpeta "public" como la raiz - EXPRESS

///////////////////////////////////////////////
const cors = require('cors') // IMPORTARLO - CORS
app.use(cors()) //CONFIGURARLO - CORS

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//RUTAS
const rutas_tareas = require('./routes/tareas') //importar el archivo de rutas para el articulo
app.use('/api/', rutas_tareas) // cargamos las rutas en app

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
require('dotenv').config() //para poder usar Variables de Entorno - DOTENV
const PUERTO = process.env.PORT

//CREAR SERVIDOR Y ESCUCHANDO PETICIONES HTTP
app.listen(PUERTO, () => {
  console.log(`La servidor está escuchando en el puerto ${PUERTO}`)
})
