// 1 - Escribir una función que determine si un número es par o impar.

function parImpar (number) {
    if (isNaN (number)) {
        console.log("Esto no es un número");  
    } else if (number % 2 === 0) {
        console.log("tu número es par");
    } else {
        console.log("tu número es impar");
    }
}
// Solicitar al usuario que ingrese un número
let numero = prompt('Ingresa un número:');

// Convertir la entrada del usuario a número
numero = parseInt(numero, 10);

// Llamar a la función y mostrar el resultado
parImpar(numero);
