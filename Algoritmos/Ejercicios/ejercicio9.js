// 9 - Escribir un algoritmo que determine si un año es bisiesto.

/* Un año es bisiesto si cumple ciertas condiciones:
Un año es bisiesto si es divisible por 4.
Pero si el año también es divisible por 100, entonces no es bisiesto.
A menos que también sea divisible por 400. En ese caso, sí es bisiesto.*/

let año = parseInt(prompt("Introduce un año:"));

if (año % 400 === 0) {
    console.log("Es un año bisiesto");
} else if (año % 100 === 0) {
    console.log("No es un año bisiesto");
} else if (año % 4 === 0) {
    console.log("Es un año bisiesto");
} else {
    console.log("No es un año bisiesto");
}
