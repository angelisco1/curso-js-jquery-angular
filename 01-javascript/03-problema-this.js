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

    // const showNombreCompleto = function() {
    //   console.log(`${this.nombre} ${this.apellido}`)
    // }.bind(this)

    const showNombreCompleto = () => {
      console.log(`${this.nombre} ${this.apellido}`)
    }

    showNombreCompleto()

    return `${this.nombre} ${this.apellido}`
  },
  getNombreCompleto2: () => {
    return `${this.nombre} ${this.apellido}`
  }
}

console.log(persona.getNombreCompleto())
console.log(persona.getNombreCompleto2())
