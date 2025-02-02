// 14 - Escribir un programa que verifique si dos strings son anagramas. 

// un anagrama es cuando dos palabras tienen las mismas letras en diferente orden

// pedir una palabra con prompt

let string1 = prompt("Introduce una palabra para comprobar si es un anagrama:").toLowerCase();

// pedir otra palabra con un prompt
let string2 = prompt("Introduce una segunda palabra para comprobar si es un anagrama:").toLowerCase();

// Función para verificar si dos palabras son anagramas

function sonAnagramas(string1, string2) {
    if (string1.length !== string2.length) {
         console.log("No es un anagrama");
    } else if (string1.split("").sort().join("") !== string2.split("").sort().join("")) {
        console.log("No son anagramas");
/*realizamos varios pasos para ordenar las letras de cada string y luego compararlas:
split(""): Convierte la cadena en un array de caracteres.

sort(): Ordena los caracteres del array en orden alfabético.

join(""): Une los caracteres ordenados de nuevo en una cadena.

Comparación (!==): Compara si las dos cadenas resultantes son diferentes. */
    }  else {
        console.log("Sí son anagramas");   
    }
}
sonAnagramas(string1, string2);