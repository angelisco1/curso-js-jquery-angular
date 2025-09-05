import { Persona } from './persona.mjs'
// import Persona from './persona'

export class Alumno extends Persona {
  #numMatricula

  constructor(nombre, apellido, numMatricula) {
    super(nombre, apellido)
    this.#numMatricula = numMatricula
  }

  get numMatricula() {
    return this.#numMatricula
  }

  set numMatricula(nueva) {
    this.#numMatricula = nueva
  }
}

const sarah = new Alumno("Sarah", "Smith", "1234A")
console.log(sarah.getNombreCompleto())
// console.log(sarah.#numMatricula)

console.log(sarah.numMatricula)
sarah.numMatricula = "0000U"
console.log(sarah.numMatricula)
