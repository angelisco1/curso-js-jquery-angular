// EcmaScript Modules
import { Persona } from './03-poo/persona.mjs'
import { Alumno } from './03-poo/alumno.mjs'

// CommonJS
// const Persona = require('./03-poo/persona')


// ----------
// - Clases -
// ----------

// class Persona {
//   constructor(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
//   }

//   getNombreCompleto() {
//     return `${this.nombre} ${this.apellido}`
//   }
// }

const mike = new Persona("Mike", "Kozinski")
console.log(mike.getNombreCompleto())

// class Alumno extends Persona {
//   constructor(nombre, apellido, numMatricula) {
//     super(nombre, apellido)
//     this.numMatricula = numMatricula
//   }
// }

const sarah = new Alumno("Sarah", "Smith", "1234A")
console.log(sarah)
console.log(sarah.getNombreCompleto())
