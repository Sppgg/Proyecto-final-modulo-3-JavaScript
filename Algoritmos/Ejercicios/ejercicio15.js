// 15 - Crear un programa que devuelva los números primos hasta el número(n). 

/* Los números primos son aquellos que solo son divisibles por ellos mismos. Si se intenta dividir por otro número nunca dará una cifra exacta salvo que se divida por 1 o por sí mismo */

// Función que verifica si un número es primo
function numeroPrimo(n) {
    if (n < 2) return false; // Los números menores a 2 no son primos

    for (let i = 2; i <= Math.sqrt(n); i++) { // Optimización con raíz cuadrada
        if (n % i === 0) {
            return false; // Si es divisible por otro número, no es primo
        }
    }
    return true; // Si no tiene divisores, es primo
}

// Función que encuentra todos los números primos hasta n
function encontrarPrimos(n) {
    let primos = [];
    for (let i = 2; i <= n; i++) {
        if (numeroPrimo(i)) {
            primos.push(i);
        }
    }
    return primos; // Retorna la lista de primos
}

// Pedimos el número al usuario
let n = parseInt(prompt("Ingresa el número límite hasta el que encontraremos los números primos:"), 10);

// Verificamos si la entrada es válida
if (isNaN(n) || n < 2) {
    console.log("Ingresa un número válido mayor o igual a 2.");
} else {
    console.log(` Los números primos hasta ${n} son:`, encontrarPrimos(n));
}
