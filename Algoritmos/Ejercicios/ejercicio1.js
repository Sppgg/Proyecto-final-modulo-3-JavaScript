// 1 - Escribir una función que determine si un número es par o impar.

function parImpar (number) {
    if (number % 2 === 0) {
        return "tu número es par";
    } else {
        return "tu número es impar";
    }
}

console.log(parImpar(7));
console.log(parImpar(4));
console.log(parImpar(5));
console.log(parImpar(87));
