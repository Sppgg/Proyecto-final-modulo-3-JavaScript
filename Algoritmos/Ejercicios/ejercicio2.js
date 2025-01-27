// 2 - Crear un algoritmo que invierta un string. 

function invertirString (string){
let reverseString = '';
for (let i = string.length -1; i>= 0; i--) {
    reverseString += string[i];    
}
return reverseString;
}
console.log(invertirString("Hola, Cris"));
console.log(invertirString("lorem ipsum"));
