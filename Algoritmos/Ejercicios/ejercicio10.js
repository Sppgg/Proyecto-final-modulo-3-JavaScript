// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa. 

// Pedimos al usuario que elija qué conversión quiere hacer
let tipo =  prompt("¿Quieres convertir de Celsius a Fahrenheit o de Fahrenheit a Celsius? Escribe 'C' o 'F'");

// Normalizamos la entrada para evitar errores de mayúsculas/minúsculas
tipo = tipo.toUpperCase();

// Evaluamos la opción elegida
if (tipo === "C") {
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    if (isNaN(celsius)){
        console.log("¿En qué planeta eso son números?");
    } else{
        let fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius}°C son ${fahrenheit.toFixed(2)}°F`);   
    }
} 
else if (tipo === "F") {
    let fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
    if (isNaN(fahrenheit)) {
        console.log("¿En qué planeta eso son números?");
    } else {
        let celsius = (fahrenheit - 32) * 5/9;
        console.log(`${fahrenheit}°F son ${celsius.toFixed(2)}°C`); 
    }
} 
else {
    console.log("Opción no válida, pillín Debes escribir 'C' o 'F'.");
}
