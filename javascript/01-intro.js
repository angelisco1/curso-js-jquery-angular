// TIPOS DE DATOS

// ----------
// - string -
// ----------

const mensaje = 'Hola \'mundo\''
// mensaje = "Bienvenidos al curso"
console.log(mensaje)

let bienvenida = "Bienvenidos al \"curso\""
console.log(bienvenida)
bienvenida = `Bienvenidos al curso de JS y +!!!`

const nombre = "Ángel"
const apellido = "Villalba"
const email = "angel@gmail.com"

const misDatos = "Me llamo " + nombre + ' ' + apellido + ' y mi email es ' + email
console.log(misDatos)

const misDatos2 = `Me llamo ${nombre} ${apellido} y mi email es ${email}`
console.log(misDatos2)

const emailCorporativo = `${nombre.toLowerCase()}.${apellido.toLowerCase()}@empresa.com`
console.log(emailCorporativo)

console.log(nombre.toUpperCase())

const cabeceras = "Id,Producto,Descripción,Precio,Stock,Unidades vendidas"
const claves = cabeceras.split(",")
console.log(claves)

console.log(email.endsWith('.com'))
console.log(email.endsWith('.es'))
console.log(cabeceras.indexOf('d'))
console.log("     Charles Falco   ".trim())
console.log(email.includes('empresa'))
console.log(emailCorporativo.includes('empresa'))

// ----------
// - number -
// ----------

const edad = 32
const altura = 1.88
const precioBtc = 100000.89231209184923742
console.log(precioBtc.toPrecision(2))
console.log(precioBtc.toFixed(2))


// -----------
// - boolean -
// -----------

const esVerdad = true
const estaLloviendo = false


// ----------------
// - truthy/falsy -
// - Falsy: false, 0, "", undefined, null, NaN
// - Truthy: todo lo demás
// ----------------

if (esVerdad) {
  console.log("Es verdad")
}

if (nombre !== "") {
  console.log("Tiene el nombre puesto")
} else {
  console.log("No tiene el nombre puesto")
}

if (NaN) {
  console.log("Es true")
} else {
  console.log("Es false")
}


// ----------
// - arrays -
// ----------

const numeros = [1, 2, 3, 4, 5]
console.log(numeros.length)
console.log(numeros[2])

numeros[2] = 10
// Añade al final
numeros.push(15)
numeros.push(23, 89, 15)

console.log(numeros)

// Quita el último y nos lo devuelve
const ultimo = numeros.pop()
console.log(ultimo)
console.log(numeros)

// Quita el primero y nos lo devuelve
const primero = numeros.shift()
console.log(primero)
console.log(numeros)

// Añade al principio
numeros.unshift(0, 100, 36)
console.log(numeros)


// Une los elementos en un string
claves.push("Likes")
const nuevasCabeceras = claves.join(";")
console.log(nuevasCabeceras)

const passwordsFiltradas = ["1234", "password", "qwerty", "0000", "12345678"]
console.log(passwordsFiltradas.includes("1234abcd.-_"))
console.log(passwordsFiltradas.includes("1234"))

// Métodos con funciones como parámetro
// forEach, map, filter, reduce, some, every

function mostrarValor(valor, index) {
  console.log(`Valor en la posición ${index}: ${valor}`)
}

numeros.forEach(mostrarValor)
numeros.forEach((valor, index) => console.log(`Valor en la posición ${index}: ${valor}`))


function fnParametros(n1, n2) {
  console.log(n1, n2)
  // console.log(arguments[5])
}

fnParametros(1, 2, 3, 4, 5, 6, 7)


const calcularDoble = (num) => {
  return num * 2
}

const doblesNumeros = numeros.map(calcularDoble)
console.log(doblesNumeros)
console.log(numeros)



const numerosImpares = numeros.filter(num => {
  return num % 2 !== 0
})
console.log(numerosImpares)

const numerosPares = numeros.filter((num) => num % 2 == 0)
console.log(numerosPares)


const sumaTotal = numeros.reduce((acc, num) => {
  return acc + num
}, 0)
console.log(sumaTotal)


// -----------
// - objetos -
// -----------

const alumno1 = {
  nombre: "Charly",
  apellido: "Falco",
  notas: {
    matematicas: [5, 6.5, 5.75],
    lengua: [7, 7.5, 8.75],
    ingles: [2, 3, 7.5],
  }
}

const alumno2 = {
  nombre: "Sarah",
  apellido: "Smith",
  notas: {
    matematicas: [8, 7.5, 6],
    lengua: [7, 5, 8.5],
    ingles: [10, 8, 9.5],
  }
}

const getTodosLosExamenesAprobados = (alumno, asignatura) => {
  return alumno.notas[asignatura].every(nota => nota >= 5)
}

const getTieneAlgun10 = (alumno, asignatura) => {
  return alumno.notas[asignatura].some(nota => nota === 10)
}

// const key = 'notas'
// const sarahTieneTodosLosExamenesDeInglesAprobados = alumno2[key].ingles.every(nota => nota >= 5)
// const charlyTieneTodosLosExamenesDeInglesAprobados = alumno1[key].ingles.every(nota => nota >= 5)

const sarahTieneTodosLosExamenesDeInglesAprobados = getTodosLosExamenesAprobados(alumno2, "ingles")
const charlyTieneTodosLosExamenesDeInglesAprobados = getTodosLosExamenesAprobados(alumno1, "ingles")

console.log(sarahTieneTodosLosExamenesDeInglesAprobados)
console.log(charlyTieneTodosLosExamenesDeInglesAprobados)

// const charlyTieneAlgun10EnIngles = alumno1[key].ingles.some(nota => nota === 10)
// const sarahTieneAlgun10EnIngles = alumno2[key].ingles.some(nota => nota === 10)

const charlyTieneAlgun10EnIngles = getTieneAlgun10(alumno1, "ingles")
const sarahTieneAlgun10EnIngles = getTieneAlgun10(alumno2, "ingles")

console.log(charlyTieneAlgun10EnIngles)
console.log(sarahTieneAlgun10EnIngles)


// ---------------------------
// - Operaciones con objetos -
// ---------------------------

// Convierte un array/objeto de JS a string con formato JSON
const numerosJSON = JSON.stringify(numeros, null, 2)
console.log(numerosJSON)

const alumno1JSON = JSON.stringify(alumno1)
const alumno2JSON = JSON.stringify(alumno2, null, 2)
console.log(alumno1JSON)
console.log(alumno2JSON)

// Convierte un string con formato JSON a objeto de JS
const alumno1Obj = JSON.parse(alumno1JSON)
console.log(alumno1Obj.nombre)


const sugus = {
  rojo: "fresa",
  amarillo: "limón",
  azul: "piña",
  naranja: "naranja"
}

const sabores = Object.values(sugus)
console.log(sabores)

const colores = Object.keys(sugus)
console.log(colores)

const entries = Object.entries(sugus)
console.log(entries)

const sugusInvertido = entries.reduce((acc, entry) => {
  const color = entry[0]
  const sabor = entry[1]
  acc[sabor] = color
  return acc
}, {})

console.log(sugusInvertido)

// ---------------------
// - Desestructuración -
// ---------------------

const sugusInvertido2 = entries.reduce((acc, entry) => {
  // const color = entry[0]
  // const sabor = entry[1]
  const [color, sabor] = entry

  acc[sabor] = color
  return acc
}, {})

console.log(sugusInvertido2)

// Operador rest/spread
const [n1, n2, n3, ...resto] = numeros
console.log(n1)
console.log(n2)
console.log(n3)
console.log(resto)

const producto = {
  name: "One Plus 11",
  price: 800,
  description: "Bla bla bla",
  year: 2024,
  stock: 290
}

// const name = producto.name
// const price = producto.price
// const description = producto.description
const {price, name, ...rest} = producto
console.log(name)
console.log(price)
console.log(rest)
// console.log(precio)


// ---------------
// - Referencias -
// ---------------

const json = {
  nombre: "JSON",
  apellido: "Statham",
  edad: 55,
  trabajo: "actor"
}

const yaml = json
yaml.nombre = "YAML"

console.log(yaml)
console.log(json)

const toml = {
  ...json,
  nombre: "TOML",
}
toml.trabajo = "detective privado"

console.log(toml)
console.log(yaml)

const numeros2 = numeros
numeros2[0] = -1
console.log(numeros)
const numeros3 = [
  ...numeros
]
numeros3[0] = -10
console.log(numeros3)
console.log(numeros)


const getNumLoteria = (sorteo, ...nums) => {
  return `Tus números para el sorteo de "${sorteo}" son: ${nums.join(" - ")}`
}

const euromillon = getNumLoteria("Euromillón", 12, 23, 25, 37, 44)
const primitiva = getNumLoteria("Primitiva", 12, 18, 23, 25, 37, 44)
console.log(euromillon)
console.log(primitiva)