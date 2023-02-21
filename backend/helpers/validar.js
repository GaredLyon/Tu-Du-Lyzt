const validator = require('validator') //IMPORTAR LA LIBRERIA - VALIDATOR

//VALIDAR PARAMETROS LLEGAN, QUE ENVIA EL USUARIO
const validarParametros = (parametros) =>{
  
  //1. el titulo es obligatorio y debe tener un minimo de 3 y maximo de 20 caracteres
  const validar_titulo = (
    !validator.isEmpty(parametros.title) &&
    validator.isLength(parametros.title, {min: 3, max: 20})
  )

  //2. la descripcion es obligatoria y debe tener un minimo de 3 y maximo cualquiera
  const validad_contenido = (
    !validator.isEmpty(parametros.description) &&
    validator.isLength(parametros.title, {min: 3, max: undefined})
  )

  //si una de ellas sale true , entonces nos manda al catch con el error
  if (!validar_titulo || !validad_contenido) {
    throw new Error('Los valores llegados no cumplen los requerimientos de la validacion')
  }
}

module.exports = {
  validarParametros
}