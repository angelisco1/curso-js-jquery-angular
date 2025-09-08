export class Persona {

  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
}

export const MI_NUM = 3


// export default Persona;

// export {
//   Persona: Patata,
//   MI_NUM: MI_NUM,
// }