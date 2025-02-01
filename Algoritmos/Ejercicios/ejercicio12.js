// 12 - Escribir una función que elimine los elementos duplicados de un array. 

// Creamos el array dado 
randomArray = [5, 7, 2, 5, 6, 9, 7, 2];
// Creamos un array vacío, que se va a ir rellenando sin los duplicados
newArray = [];
// iteramos por el array dado con un bucle for
for (let i = 0; i < randomArray.length; i++) {
    if (!newArray.includes(randomArray[i])) {
        newArray.push(randomArray[i]);      
    }
// si el nuevo array NO incluye el elemento actual del array original se añade el elemento a new array
}
console.log("Este es el array sin los elementos duplicados:",newArray);
