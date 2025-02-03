// 16 - Escribir una función que convierta un número romano a número arábigo.
function romanToArabic(roman) {
    if (typeof roman !== 'string') {
        throw new Error("Entrada inválida: Debe ser una cadena de texto.");
    }

    // Diccionario de valores romanos
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    // Expresión regular para validar la sintaxis romana estándar
    const romanRegex = /^(M{0,3}(CM|CD|D?C{0,3}))(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    // Verificar si la cadena contiene solo caracteres romanos válidos
    if (!romanRegex.test(roman)) {
        throw new Error("Entrada inválida: No es un número romano válido.");
    }

    let total = 0; // Acumulador del resultado

    for (let i = 0; i < roman.length; i++) {
        let current = romanValues[roman[i]];      // Valor actual
        let next = romanValues[roman[i + 1]];     // Valor siguiente (si existe)

        if (next && current < next) {
            total -= current; // Si el actual es menor que el siguiente, restamos
        } else {
            total += current; // De lo contrario, sumamos
        }
    }

    return total;
}

// Función para "jugar" con el usuario en la consola
function convertRomanToArabic() {
    alert("Escribe un número romano para ver su equivalente en arábigo.Escribe 'salir' para terminar.");

    while (true) {
        let entrada = prompt("Ingresa un número romano (o escribe 'salir' para terminar):");

        if (!entrada) {
            alert("Entrada vacía. Intenta de nuevo.");
            continue;
        }

        entrada = entrada.toUpperCase(); // Convertir a mayúsculas por seguridad

        if (entrada === "SALIR") {
            alert("Hasta la próxima.");
            break;
        }

        try {
            let resultado = romanToArabic(entrada);
            alert(` El número romano "${entrada}" equivale a ${resultado}`);
        } catch (error) {
            alert(` Error: ${error.message}`);
        }
    }
}

// Ejecutar el juego
convertRomanToArabic();

