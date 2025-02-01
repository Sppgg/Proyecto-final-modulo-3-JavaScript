// 11 - Encontrar el segundo número más grande en un array. 

Arr = [5, 7, 6, 2, 8, 3];

let mayor = -Infinity; // Nos aseguramos de que cualquier número en el array sea mayor

let segundoMayor = -Infinity; // Nos aseguramos de que cualquier número en el array sea mayor

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > mayor){
        mayor = Arr[i]
    }
};
console.log("El número más grande es:", mayor);

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] === mayor ) {
        segundoMayor = mayor - 1
    }    
}
console.log("El segundo número más grande es:", segundoMayor);
