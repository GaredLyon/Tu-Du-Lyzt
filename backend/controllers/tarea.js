const {validarParametros} = require('../helpers/validar')
const Tarea = require('../models/tarea')
const {validarState} = require('../helpers/validarState')

//CONTROLADOR NUMERO 1 ///////////////////////////////////////////////////////
//CONTROLADOR NUMERO 1 - PARA TRAER UNA LISTA COMPLETA DE TODAS LAS TAREAS ///
//CONTROLADOR NUMERO 1 ///////////////////////////////////////////////////////
const conseguirTareas = (req, res) => {
  const cantidadResultados = req.params.ultimos

  //1. aqui podemos poner los filtros que se quiera hacer, en este caso devolvemos todos
  let consulta = Tarea.find({
    /* aqui dentro */
  })

  //2. ordenamos la lista del mas nuevo al mas antiguo
  consulta.sort({dateAndHour: -1})

  //3. si recibimos en el parametro una cantidad especifica de elementos, cortamos las demas tareas
  if (cantidadResultados) {
    consulta.limit(cantidadResultados)
  }

  consulta.exec((error, tareas) => {
    //4. en caso que ocurra un error o no hayan tareas, devolvemos esto
    if (error || !tareas) {
      return res.status(404).json({
        status: 'Error',
        message: 'No se han encontrado tareas'
      })
    }

    //5. en caso contrario, devolvemos las tareas, asi
    return res.status(200).json({
      status: 'sucess',
      parameters: cantidadResultados,
      length: tareas.length,
      tasks: tareas
    })
  })
}


//CONTROLADOR NUMERO 2 ///////////////////////////////////////////////////////
//CONTROLADOR NUMERO 2 - PARA GUARDAR UNA NUEVA TAREA ////////////////////////
//CONTROLADOR NUMERO 2 ///////////////////////////////////////////////////////
const crear = (req, res) => {
  //1. recoger los parametros enviados por post
  const parametros = req.body

  // console.log(parametros)

  //2. validar los datos
  try {
    validarParametros(parametros)
    
    // console.log('paso el test')

  } catch (error) {
    return res.status(400).json({
      status: 'Error',
      message: 'Faltan datos a enviar'
    })
  }

  //3. crear el objeto a guardar - asignando los valores de forma automatica
  const tarea = new Tarea(parametros)

  // console.log(tarea)

  //4. asignar los valores a objeto basado en el modelo (manual o automatico)
  //es mejor usar la forma automatica, es mas sostenible, asi como arriba -> const tarea = new Tarea(parametros)
  //articulo.titulo = parametros.titulo -> esta seria la forma manual de hacerlo

  //5. guardar el articulo en la base de datos
  tarea.save((error, tareaGuardada) => {

    //6. en caso que ocurra un error o no exista la tarea, devolvemos esto
    if (error || !tareaGuardada) {
      return res.status(400).json({
        status: 'Error',
        message: 'No se ha guardado la tarea'
      })
    }

    //7. en caso contrario devolver el resultado asi
    return res.status(200).json({
      status: 'sucess',
      task: tareaGuardada,
      message: 'tarea creada con exito!!'
    })
  })
}



//CONTROLADOR NUMERO 3///////////////////////////////////////////////////////
//CONTROLADOR NUMERO 3 - PARA BORRAR UAN TAREA //////////////////////////////
//CONTROLADOR NUMERO 3///////////////////////////////////////////////////////
const borrar = (req, res) => {
  let tareaId = req.params.id

  // console.log(tareaId)

  //1.eliminamos la tarea de la base de datos, buscando por el ID
  const consulta = Tarea.findByIdAndDelete({_id: tareaId})

  consulta.exec((error, tareaBorrada) => {
    //2. si ocurre algun error o no existe la tarea, devolvemos esto
    if (error || !tareaBorrada) {
      return res.status(500).json({
        status: 'Error',
        mensaje: 'Ha habido un error al borrar el tarea'
      })
    }

    //3. en caso que si exista, y se borro correctamente devolvemos esto 
    return res.status(200).json({
      status: 'sucess',
      task: tareaBorrada,
      message: 'Tarea borrado exitosamente'
    })
  })
}


//CONTROLADOR NUMERO 4///////////////////////////////////////////////////////
//CONTROLADOR NUMERO 4 - PARA ACTUALIZAR O MODIFICAR UNA TAREA //////////////
//CONTROLADOR NUMERO 4///////////////////////////////////////////////////////
const actualizar = (req, res) => {
  const tareaId = req.params.id
  const parametros = req.body


  // console.log(tareaId)
  // console.log(parametros)

  // //1. validamos los datos que me envia el usuario
  try {
    validarParametros(parametros)
  } catch (error) {
    return res.status(400).json({
      status: 'Error',
      message: 'Faltan datos a enviar'
    })
  }

  // console.log('paso el test')


  // //2. si pasa validacion, entonces ahora actualizamos la tarea en la base de datos
  const consulta = Tarea.findOneAndUpdate({_id: tareaId}, parametros, {new: true})

  consulta.exec((error, tareaActualizada) => {
    //3. si ocurre un error o no existe la tarea, devolvemos esto
    if (error || !tareaActualizada) {
      return res.status(404).json({
        status: 'Error',
        message: 'Ha habido un error al actualizar la tarea'
      })
    }

    //4. en caso que no ocurra error alguno y se elimino correctamente la tarea, devolvemos esto
    return res.status(200).json({
      status: 'success',
      task: tareaActualizada,
      message: 'Tarea actualizada con exito!!'
    })
  })
}



//CONTROLADOR NUMERO 5//////////////////////////////////////////////////////////
//CONTROLADOR NUMERO 5 - PARA DEVOLVER LAS TAREAS QUE COINCIDAN CON LAS BUSQUEDA
//CONTROLADOR NUMERO 5//////////////////////////////////////////////////////////
const buscador = (req, res)=>{
  //1. sacar el string de busqueda de la url
  let busqueda = req.params.busqueda

  // console.log(busqueda)

  //2. buscamos coincidencias usando: Find OR, buscando coincidencias en titulo o descripcion
  const peticion= Tarea.find({'$or': [
    {'title': {"$regex": busqueda, "$options": "i"}},
    {'description': {"$regex": busqueda, "$options": "i"}}
  ]})

  //3. Ordenar del mas nuevo al mas antiguo
  peticion.sort({fecha: -1})


  peticion.exec((error, tareaEncontradas) =>{
    //4. en caso que ocurra un error o no hay tareas que coincidan devolvemos esto
    if (error || !tareaEncontradas || tareaEncontradas.length < 0) {
      return res.status(404).json({
        status: 'Error',
        message: 'No se han encontrado tareas para la busqueda'
      })

    } else{
      //5. En caso que si hayan tareas que coincidan con la busqueda, devolvemos esto
      return res.status(200).json({
        status: 'sucess',
        tasks: tareaEncontradas
      })
    }
  })
}


//CONTROLADOR NUMERO 6
const mover = (req, res) => {
  const id = req.params.id
  const parametros = req.body

  console.log(id)
  console.log(parametros)


  // //1. validamos los datos que me envia el usuario
  try {
    validarState(parametros)
    console.log('paso el test')

  } catch (error) {
    return res.status(400).json({
      status: 'Error',
      message: 'Faltan datos a enviar'
    })
  }


  // //2. si pasa validacion, entonces ahora actualizamos la tarea en la base de datos
  const consulta = Tarea.findOneAndUpdate({_id: id}, parametros, {new: true})

  consulta.exec((error, tareaActualizada) => {
    //3. si ocurre un error o no existe la tarea, devolvemos esto
    if (error || !tareaActualizada) {
      return res.status(404).json({
        status: 'Error',
        message: 'Ha habido un error al mover la tarea'
      })
    }

    //4. en caso que no ocurra error alguno y se elimino correctamente la tarea, devolvemos esto
    return res.status(200).json({
      status: 'success',
      task: tareaActualizada,
      message: 'Tarea movida con exito!!'
    })
  })
}

//CONTROLADOR NUMERO 7
//CONTROLADOR NUMERO 8
//CONTROLADOR NUMERO 9
//CONTROLADOR NUMERO 10, ETC

////////////////////////////
module.exports = {
  //AQUI VAN LOS DEMAS CONTROLADORES EXPORTADOS
  crear,
  conseguirTareas,
  borrar,
  actualizar,
  buscador,
  mover
}


