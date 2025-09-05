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

const obtenerDatos = async () => {
  try {
    const data = await fs.readFile("files/tienda.csv")
    const datosTienda = data.toString()
    console.log('Ya he leido el archivo: ', datosTienda)

    const data2 = await fs.readFile("files/pedidos.csv")
    const datosPedidos = data2.toString()
    console.log('Ya he leido el archivo: ', datosPedidos)

    const data3 = await fs.readFile("files/usuarios.csv")
    const datosUsuarios = data3.toString()
    console.log('Ya he leido el archivo: ', datosUsuarios)

    const datosTiendaProcesados = procesarDatos(datosTienda)
    const datosPedidosProcesados = procesarDatos(datosPedidos)
    const datosUsuariosProcesados = procesarDatos(datosUsuarios)

    const mensajes = getDatosUltimosPedidos(datosPedidosProcesados, datosTiendaProcesados, datosUsuariosProcesados)

    console.log(mensajes)
    return mensajes

  } catch (err) {
    console.log('Hay algún error: ', err.message)
  }

  console.log('FIN')
}

obtenerDatos()