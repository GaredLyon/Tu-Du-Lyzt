const validator = require('validator') //IMPORTAR LA LIBRERIA - VALIDATOR

//VALIDAR EL PARAMETRO QUE LLEGA, QUE ENVIA EL USUARIO
const validarState = (parametros) =>{
  
  // console.log('dentro', parametros)
  
  //1. el estado nuevo es obligatorio y pudee ser solo 3  valores posibles
  const validar_estado = (
    !validator.isEmpty(parametros.state) &&
    validator.isIn(parametros.state, ['progress', 'completed', 'pendient'])
  )

  // console.log(validar_estado)

  // en caso que o cumpla los reqiuerimientos nos manda al catch con el error
  if (!validar_estado) {
    throw new Error('Los valores llegados no cumplen los requerimientos de la validacion')
  }
}

module.exports = {
 validarState
}