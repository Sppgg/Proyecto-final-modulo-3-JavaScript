// 3 - Escribir una función que encuentre el número mayor en un array. 

// Pedimos los números al usuario y los almacenamos en un array

let numeros = [];
numeros.push(parseInt(prompt("Introduce un número:")));
numeros.push(parseInt(prompt("Introduce otro número:")));
numeros.push(parseInt(prompt("Introduce un tercer número:")));

// Función para encontrar el número mayor

function numeroMayor(numeros) {
    if (numeros.some(isNaN)) {
        console.log("No has introducido números, pillín");
    }  else {
        let mayor = Math.max(...numeros);
        console.log(`el número mayor es: ${mayor}`);
    }
}
numeroMayor(numeros);
