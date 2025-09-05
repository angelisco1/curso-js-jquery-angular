// ---------------------
// - Problema del this -
// ---------------------
console.log(this)
// this.nombre = "Paco"
// this.apellido = "García"

const persona = {
  nombre: "Charly",
  apellido: "Falco",
  getNombreCompleto: function() {
    return `${this.nombre} ${this.apellido}`
  },
  getNombreCompleto2: () => {
    return `${this.nombre} ${this.apellido}`
  }
}

console.log(persona.getNombreCompleto())
console.log(persona.getNombreCompleto2())
