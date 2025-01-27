// 2 - Crear un algoritmo que invierta un string. 

function invertirString (string) {
let reverseString = '';
for (let i = string.length -1; i>= 0; i--) {
     reverseString += string[i];    
}
console.log(reverseString);
}

// Solicitar al usuario que ingrese un número
let string = prompt('Ingresa una o varias palabras:');

// Llamar a la función y mostrar el resultado
invertirString(string);
