// 20 - Un reloj muestra:

/* -> la hora (0 <= h <= 23)
-> los minutos (0 <= m <= 59)
-> y los segundos (0 <= s <= 59).
Escribe una funcion que calcule los millisegundos que han pasado
desde media noche 00:00:00 hasta la hora actual teniendo en
cuenta que:
– Hay 1000 millisegundos en un segundo
– Podemos obtener la hora, minutos y segundos con la función
"getTime" */

function calcularMilisegundosDesdeMedianoche() {
    // Obtenemos la hora actual
    let ahora = new Date();
    let h = ahora.getHours();
    let m = ahora.getMinutes();
    let s = ahora.getSeconds();
    
    // Verificaciones de rango
    if (h < 0 || h > 23) {
        return "Error: Las horas deben estar entre 0 y 23.";
    }
    if (m < 0 || m > 59) {
        return "Error: Los minutos deben estar entre 0 y 59.";
    }
    if (s < 0 || s > 59) {
        return "Error: Los segundos deben estar entre 0 y 59.";
    }
    
    // Creamos una instancia de Date para la medianoche de hoy
    let medianoche = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    
    // Calculamos la diferencia en milisegundos
    let milisegundosDesdeMedianoche = ahora.getTime() - medianoche.getTime();
    
    return milisegundosDesdeMedianoche;
}

// Mostrar los milisegundos desde la medianoche hasta la hora actual
console.log("Milisegundos desde medianoche hasta ahora:", calcularMilisegundosDesdeMedianoche());

