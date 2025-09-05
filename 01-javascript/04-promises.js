const fs = require('fs/promises')

// const datos = fs.readFile("files/tienda.csv")
// console.log(datos)

const procesarDatos = (datosAProcesar) => {
  const [cabecerasDatos, ...filasDatos] = datosAProcesar.split('\n')
  console.log(filasDatos)
  const claves = cabecerasDatos.split(',')

  const clavesProcesadas = claves.map(clave => clave.toLowerCase().replaceAll(" ", "_"))
  console.log(clavesProcesadas)

  const datosProcesados = filasDatos
    .map(fila => fila.split(","))
    .map(fila => {
      const objetoProcesado = clavesProcesadas.reduce((acc, clave, i) => {
        return {
          ...acc,
          [clave]: fila[i]
        }
      }, {})

      return objetoProcesado
    })

  return datosProcesados
}

const getDatosUltimosPedidos = (datosPedidosProcesados, datosTiendaProcesados, datosUsuariosProcesados) => {
  const mensajes = datosPedidosProcesados.map(pedido => {
    const usuario = datosUsuariosProcesados.find(usuario => usuario.id === pedido.usuario_id)
    const producto = datosTiendaProcesados.find(producto => producto.id === pedido.producto_id)

    return `El pedido ${pedido.id} es del usuario ${usuario.nombre} y contiene ${pedido.cantidad} unidades del producto ${producto.producto} a un precio de ${producto.precio}€. Ha pagado ${Number(pedido.cantidad) * Number(producto.precio)}€`
  })

  return mensajes
}



const promiseTienda = fs.readFile("files/tienda.csv")
console.log(promiseTienda)


let datosTienda = ""
let datosPedidos = ""
let datosUsuarios = ""

promiseTienda
  .then((data) => {
    datosTienda = data.toString()
    console.log('Ya he leido el archivo: ', datosTienda)
    return fs.readFile("files/pedidos.csv")
  })
  .then((data) => {
    datosPedidos = data.toString()
    console.log('Ya he leido el archivo: ', datosPedidos)
    return fs.readFile("files/usuarios.csv")
  })
  .then((data) => {
    datosUsuarios = data.toString()
    console.log('Ya he leido el archivo: ', datosUsuarios)

    const datosTiendaProcesados = procesarDatos(datosTienda)
    const datosPedidosProcesados = procesarDatos(datosPedidos)
    const datosUsuariosProcesados = procesarDatos(datosUsuarios)

    const mensajes = getDatosUltimosPedidos(datosPedidosProcesados, datosTiendaProcesados, datosUsuariosProcesados)

    console.log(mensajes)
  })
  .catch((err) => {
    console.log('Hay algún error: ', err.message)
  })








// fs.readFile("files/tienda.csv", (err, data) => {
//   if (err) {
//     console.log('Hay algún error: ', err.message)
//     return
//   }
//   const datosTienda = data.toString()
//   console.log('Ya he leido el archivo: ', datosTienda)

//   fs.readFile("files/pedidos.csv", (err, data) => {
//     if (err) {
//       console.log('Hay algún error: ', err.message)
//       return
//     }
//     const datosPedidos = data.toString()
//     console.log('Ya he leido el archivo: ', datosPedidos)

//     fs.readFile("files/usuarios.csv", (err, data) => {
//       if (err) {
//         console.log('Hay algún error: ', err.message)
//         return
//       }
//       const datosUsuarios = data.toString()
//       console.log('Ya he leido el archivo: ', datosUsuarios)

//       const datosTiendaProcesados = procesarDatos(datosTienda)
//       const datosPedidosProcesados = procesarDatos(datosPedidos)
//       const datosUsuariosProcesados = procesarDatos(datosUsuarios)

//       const mensajes = getDatosUltimosPedidos(datosPedidosProcesados, datosTiendaProcesados, datosUsuariosProcesados)

//       console.log(mensajes)
//     })
//   })

// })


console.log('FIN')