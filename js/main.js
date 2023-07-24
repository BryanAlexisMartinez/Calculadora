//obtener los elementos por su id
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMultiplicacion = document.getElementById("btnMultiplicacion");
let btnDivision = document.getElementById("btnDivision");
let btnIgual = document.getElementById("btnIgual");
let btnPunto = document.getElementById("btnPunto");
let txtResultado = document.getElementById("txtResultado");
let lblDatos = document.getElementById("lblDatos");
let numeroActual = ""; // Almacena el número actual ingresado
let primerNumero = "";   // Almacena el primer número para la operación
let operacion = "";     // Almacena la operación a realizar

//Funcionalidad del btn0
btn0.addEventListener("click", function (event) {
  event.preventDefault;

});

// JavaScript


// Función para actualizar el cuadro de texto con el número actual
function actualizarResultado() {
  txtResultado.value = numeroActual;
}

// Función para realizar la operación seleccionada
function realizarOperacion() {
  let resultado;
  const num1 = parseFloat(primerNumero);
  const num2 = parseFloat(numeroActual);

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }

  // Actualizar el cuadro de texto con el resultado
  txtResultado.value = resultado;
  numeroActual = resultado.toString();
}

// Event listeners para los números (0-9) y el punto decimal
for (let i = 0; i <= 9; i++) {
  document.getElementById("btn" + i).addEventListener("click", function () {
    numeroActual += i;
    actualizarResultado();
  });
}

document.getElementById("btnPunto").addEventListener("click", function () {
  // Evitar agregar más de un punto decimal
  if (!numeroActual.includes(".")) {
    numeroActual += ".";
    actualizarResultado();
  }
});

// Event listeners para los operadores (+, -, *, /)
document.getElementById("btnSuma").addEventListener("click", function () {
  primerNumero = numeroActual;
  operacion = "+";
  numeroActual = "";
});

document.getElementById("btnResta").addEventListener("click", function () {
  primerNumero = numeroActual;
  operacion = "-";
  numeroActual = "";
});

document.getElementById("btnMultiplicacion").addEventListener("click", function () {
  primerNumero = numeroActual;
  operacion = "*";
  numeroActual = "";
});

document.getElementById("btnDivision").addEventListener("click", function () {
  primerNumero = numeroActual;
  operacion = "/";
  numeroActual = "";
});

// Event listener para el botón igual (=)
document.getElementById("btnIgual").addEventListener("click", function () {
  realizarOperacion();
});
