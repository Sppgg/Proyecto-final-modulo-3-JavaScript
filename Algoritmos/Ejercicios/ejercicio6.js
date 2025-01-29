// 6 - Crear un programa que calcule el número Fibonacci en la posición n. 

// La secuencia de Fibonacci es una sucesión de números en la que cada número es la suma de los dos anteriores. 
 
let n = parseInt(prompt("Introduce un número para ver su posición en la secuencia de Fibonacci:"));

if (isNaN(n) || n < 0) {
    console.log("no has introducido números, pillín.");
} else {
    let a = 0;
    let b = 1;

    if (n === 0) {
        console.log(a);
    } else if (n === 1) {
        console.log(b);
    } else {
        let c;
        for (let i = 2; i <= n; i++) {
           c = a + b;
           a = b;
           b = c;
        }
        console.log(c);
    }
}

