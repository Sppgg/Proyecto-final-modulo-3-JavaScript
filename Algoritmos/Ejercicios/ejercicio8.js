// 8 - Crear una función que cuente cuántas veces aparece un carácter en un string.

let input = prompt("introduce una palabra para comprobar cuántas veces aparece un carácter:");
let caracter = prompt("Introduce el carácter que quieres contar:");
function caracterCount (input, caracter) {
    let counter = 0;
    if (typeof input!=="string"|| input.trim() === "") {
        console.log("Esto no es una palabra, pillín");
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === caracter) {
                counter++;
        }        
    }
    console.log(`El carácter "${caracter}" aparece ${counter} veces en la cadena.`);
}
}
caracterCount(input, caracter);