// 13 - Crear un algoritmo que sume todos los números de un array. 

 arrNum = [2, 5, 6, 8, 3, 66, 7, 25];

function sumaTotal(arrNum) {
    let sumaTotal = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sumaTotal += arrNum[i]; 
        // Operador +=: Suma el valor de arrNum[i] al valor actual de sumaTotal y asigna el resultado de nuevo a sumaTotal
 }
  return sumaTotal;
}
let resultado = sumaTotal(arrNum); // Guardar el resultado en una variable
console.log("La suma de todos los números del array es:", resultado);
