// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

let arrNum = [1, 5, 46, 8, 64, 2]; 

for (let j = 0; j < arrNum.length - 1; j++) {  // Repetimos el proceso varias veces
    for (let i = 0; i < arrNum.length - 1; i++) {  // Recorremos el array
        if (arrNum[i] > arrNum[i + 1]) {  // Si están en el orden incorrecto
            let temp = arrNum[i];  // Guardamos el número en una variable temporal
            arrNum[i] = arrNum[i + 1];  // Intercambiamos los valores
            arrNum[i + 1] = temp;
        }
    }
}
console.log(arrNum);