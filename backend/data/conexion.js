//IMPORTAR MOONGOSE
const mongoose  = require('mongoose') //IMPORTAMOS - MONGOSE
mongoose.set('strictQuery', false); //ESTO NO ERA NECESARIO, pero lo necesita por alguna razon - MONGOSE

require('dotenv').config() //IMPORTAMOS DOTENV PARA PODER USAR LAS VARIABLES ENTORNO - DOTENV
const uri = process.env.MONGODB_URI //TRAEMOS AL URI DEL ARCHIVO .ENV

//REALIZAR LA CONEXION CON LA BASE DE DATOS
const conexion = async () =>{

  try {
    await mongoose.connect(uri)
    console.log('Conectado correctamente a la base de datos tu-du-lyzt !!')

  } catch (error) {
    console.log(error)
    throw new Error('no se pudo hacer la conexion con la base de datos !!')
  }

}

module.exports = {conexion}