// 17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados. 
/* Un string tiene paréntesis balanceados si:
Cada ( tiene un ) correspondiente.
No hay más ) que ( en ningún punto de la cadena.
El orden de los paréntesis es correcto (no puede haber un ) antes de su ( correspondiente). */

/* Crear una variable contador inicializada en 0.
Recorrer el string carácter por carácter:
Si encontramos un (, incrementamos el contador.
Si encontramos un ), decrementamos el contador.
Si en algún punto contador < 0, la secuencia ya es inválida.
Al finalizar el recorrido, el contador debe ser exactamente 0 para ser válido. */

function tieneParentesisBalanceados(str) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === "(") {
            contador++;
        } else if (char === ")") {
            contador--;

            // Si en algún momento hay más ')' que '('
            if (contador < 0) {
                return false;
            }
        }
    }

    // Al final, el contador debe ser 0
    return contador === 0;
}

//Pruebas
console.log(tieneParentesisBalanceados("(())"));  // true
console.log(tieneParentesisBalanceados("()()"));  // true
console.log(tieneParentesisBalanceados("(()"));   // false
console.log(tieneParentesisBalanceados(")("));    // false
console.log(tieneParentesisBalanceados(""));      // true
console.log(tieneParentesisBalanceados("()a(b)c)")) // false
