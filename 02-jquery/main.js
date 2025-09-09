console.log($("#cuenta"))
console.log($(".btn"))
console.log($("#contador > .btn"))
console.log($(".btn[type='submit']"))
console.log($("form"))

const randomNum = Math.floor(Math.random()*10)
// .innerText = "10"
// .textContent = "10"
$("#cuenta").text(randomNum)

// .innerHTML = "<p style='color: red;'>Hay un error</p>"
// $(".error").html("<p style='color: red;'>Hay un error</p>")

// .value = "10"
$("input[name='cuenta']").val(randomNum)

$("#btnInc").on("click", () => {
  const cuenta = $('#cuenta').text()
  const cuentaActual = Number(cuenta) + 1
  $('#cuenta').text(cuentaActual)
})

$("#btnDec").click(() => {
  const cuenta = $('#cuenta').text()
  const cuentaActual = Number(cuenta) - 1

  if (cuentaActual < 0) {
    return
  }

  $('#cuenta').text(cuentaActual)
})

$("form").on("submit", (event) => {
  event.preventDefault()

  const nuevaCuenta = $("input").val()
  console.log(nuevaCuenta)

  if (nuevaCuenta < 0) {
    const error = $("<p>La cuenta no puede ser negativa</p>").css({
      color: 'red'
    })

    error
      .hide()
      .appendTo("form > div > label")
      .fadeIn(1000)

    setTimeout(() => {
      error
        .fadeOut(1000, function() {
          $(this).remove()
        })
    }, 2000)

    return
  }

  $("#cuenta").text(nuevaCuenta)
})