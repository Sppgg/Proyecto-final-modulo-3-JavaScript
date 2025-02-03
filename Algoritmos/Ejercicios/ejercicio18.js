// 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak). 
function toLeetSpeak(text) {
    // Validamos la entrada
    if (typeof text !== "string" || text.trim() === "") {
        return "Error: Ingresa un texto válido.";
    }

    // Tabla de reemplazos (leet speak)
    const leetMap = {
        'A': '4', 'B': '8', 'C': '<', 'E': '3', 'G': '6', 
        'H': '#', 'I': '1', 'L': '1', 'O': '0', 'S': '5', 
        'T': '7', 'Z': '2'
    };

    //Transformamos el texto
    let leetText = "";
    for (let char of text) {
        // Convertimos a mayúscula para buscar en el mapa
        let upperChar = char.toUpperCase();
        leetText += leetMap[upperChar] || char; // Reemplazar o mantener original
    }

    return leetText;
}

// Pruebas
console.log(toLeetSpeak("Hola Mundo")); // H0l4 Mund0
console.log(toLeetSpeak("Javascript es genial!")); // J4v45cr1pt 35 63n14l!
console.log(toLeetSpeak("")); // Error: Ingresa un texto válido.
console.log(toLeetSpeak("123!@#")); // 123!@#
