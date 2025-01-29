// 4 - Crear un algoritmo que devuelva el factorial de un número.

let num = parseInt(prompt("Introduce un número para saber su factorial:")); // Convertimos la entrada a número

function esFactorial(n) {
if (isNaN(num) || n < 0) { // Validamos que sea un número y que sea positivo
  console.log("Por favor, introduce un número entero positivo.");
} else {
  let resultado = 1; // Inicializamos el resultado
  for (let i = num; i >= 1; i--) { // Bucle para calcular el factorial
    resultado *= i; // Multiplicamos por el número actual
  }
  console.log(`El factorial de ${num} es: ${resultado}`); // Mostramos el resultado final
}
}
esFactorial(num);
