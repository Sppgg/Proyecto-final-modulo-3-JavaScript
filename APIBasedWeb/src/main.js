import './style.css'
const API_BASE_URL = "https://fakestoreapi.com";

/* COMENZAMOS
CON
EL 
C R U D */

//  --------------- PETICIÓN GET ---------------
async function getAllProducts() {
  let url = `${API_BASE_URL}/products`;
  try {
    const response = await fetch (url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Error inesperado: ${response.status}`);
    } else{
      const products = await response.json(); 
      console.log("Lista de productos:", products);
    }

  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return []; 
    // Devuelve un array vacío en caso de error para evitar fallos en la UI
  }
}

// Llamar la función y probar en consola
getAllProducts().then(products => console.log(products));
// getAllProducts por sí solo en un console log imprimirá una promesa pendiente. usando .then(+arrow function) espera a que la Promesa se resuelva y luego imprime los datos.


//  --------------- PETICIÓN POST ---------------
//  --------------- PETICIÓN PUT ---------------
//  --------------- PETICIÓN DELETE ---------------
