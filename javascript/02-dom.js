const cuentaElem = document.getElementById("cuenta")
console.log(cuentaElem.textContent)

const buttonElems = document.querySelectorAll("button")
console.log(buttonElems)
// const btnDecElem = document.querySelector("button")

const incrementarCuenta = () => {
  const cuentaElem = document.getElementById("cuenta")
  const cuenta = parseInt(cuentaElem.textContent)
  const cuentaActualizada = cuenta + 1
  console.log(cuentaActualizada)
  cuentaElem.textContent = cuentaActualizada
}

const decrementarCuenta = () => {
  const cuentaElem = document.getElementById("cuenta")
  const cuenta = Number(cuentaElem.textContent)
  const cuentaActualizada = cuenta - 1

  if (cuentaActualizada < 0) {
    return
  }
  console.log(cuentaActualizada)
  cuentaElem.textContent = cuentaActualizada
}

buttonElems[0].addEventListener('click', decrementarCuenta)
buttonElems[1].addEventListener('click', incrementarCuenta)