// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
// para calcular el siglo. Math.ceil redondea el resultado hacia arriba al entero más cercano.

function calcularSiglo (year) {
    if (year <= 0 || isNaN(year)){
        return "introduce un año válido";
    } else {
       const siglo = Math.ceil(year/100);
        return siglo;
    } 
}

let year = parseInt(prompt("Introduce un año para conocer el siglo al que pertenece"));
const resultadoSiglo= calcularSiglo(year);
console.log("El siglo al que pertenece ese año es:", resultadoSiglo);
