const urlAPI = "https://csrng.net/csrng/csrng.php?min=1&max=10"

const getRandomCuenta = async () => {
  // const resp = await fetch(urlAPI)
  // const data = await resp.json()
  // console.log(data)
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random()*10))
    }, 1000)
  })

  return data
}

window.addEventListener('load', async () => {
  const cuentaInicial = await getRandomCuenta()
  const cuentaElem = document.getElementById("cuenta")
  cuentaElem.textContent = cuentaInicial
})

const cuentaElem = document.getElementById("cuenta")
console.log(cuentaElem.textContent)

// const botones = document.getElementsByClassName("btn-azul")
// console.log(botones)

// document.getElementsByName("cuenta")
// document.getElementsByTagName("button")


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

const formularioCuentaElem = document.getElementById("form-cuenta")
formularioCuentaElem.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event)
  const nuevaCuenta = event.target[0].value
  console.log('Nueva cuenta: ', nuevaCuenta)

  // const errorElems = document.getElementsByClassName("error")
  // if (Number(nuevaCuenta) < 0) {
  //   errorElems[0].textContent = "El valor de cuenta no puede ser negativo"
  //   return
  // }
  // errorElems[0].textContent = ""

  if (Number(nuevaCuenta) < 0) {
    const errorElem = document.createElement("p")
    errorElem.textContent = "El valor de cuenta no puede ser negativo"
    errorElem.classList.add("error")
    errorElem.classList.add("fadeIn")
    errorElem.setAttribute("atributo1", "patata")
    console.log(errorElem)
    const divCuentaElem = document.querySelector("form > div")
    divCuentaElem.appendChild(errorElem)

    setTimeout(() => {
      errorElem.classList.add("fadeOut")
      errorElem.addEventListener("animationend", () => {
        divCuentaElem.removeChild(errorElem)
      })
      // errorElem.addEventListener("animationend", () => {
      //   console.log("El error ha desaparecido")
      // })
    }, 2000)
    return
  }


  const cuentaElem = document.getElementById("cuenta")
  cuentaElem.textContent = nuevaCuenta
})