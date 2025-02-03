// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
// para calcular el siglo. Math.ceil redondea el resultado hacia arriba al entero más cercano.

function calcularSiglo (año) {
    if (año <= 0 || isNaN(año)){
        return "introduce un año válido";
    } else {
       const siglo = Math.ceil(año/100);
        return siglo;
    } 
}

let año = parseInt(prompt("Introduce un año para conocer el siglo al que pertenece"));
const resultadoSiglo= calcularSiglo(año);
console.log("El siglo al que pertenece ese año es:", resultadoSiglo);
