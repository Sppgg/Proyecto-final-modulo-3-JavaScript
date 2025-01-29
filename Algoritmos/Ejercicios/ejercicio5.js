// 5 - Determinar si una palabra es un palíndromo. 
// Un palíndromo es una palabra si se lee igual hacia adelante que hacia atrás. 

const palabra = prompt("Introduce una palabra para comprobar si es un palíndromo:");
const arr = palabra.split(""); // Convertimos la palabra en un array de letras
arr.reverse();                 // Invertimos el array
const reverseword = arr.join(""); // Reconstruimos la palabra invertida

//Comprobamos que el argumento que se pase a la función sea una palabra o frase.
if (typeof word!== "string") {
  console.log("Se necesita una palabra para hacer la comprobación");
}
// Comparamos las palabras ignorando mayúsculas y minúsculas
if (palabra.toLowerCase() === reverseword.toLowerCase()) {
  console.log("Es un palíndromo");
} else {
  console.log("No es un palíndromo");
}