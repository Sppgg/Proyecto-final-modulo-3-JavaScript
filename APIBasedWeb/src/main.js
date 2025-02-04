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

async function createNewProduct () {
  let url = `${API_BASE_URL}/products`;
  try {
    const response = await fetch (url, {
      method: "POST",
      headers: 
      {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      throw new Error (`Error inesperado creando tu producto, inténtalo de nuevo`, response.status);      
    } else {
      const data = await response.json();
      console.log("producto creado con exito");
    }
  } catch (error) {
    console.error("Error al crear el producto", error);
  }

  
}
// Llamar a la función

createNewProduct();

//  --------------- PETICIÓN PUT ---------------

async function editProduct () {
const url = `${API_BASE_URL/products/`${id}`}`
try {
  const response = await fetch (url, {
   method: "PUT",
   headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(data),
})
if (!response.ok) {
  throw new Error ("Algo fue mal, inténtalo de nuevo", response.status); 
} else {
 const data = response.json();
console.log("Producto editado con éxito");
}
}
catch (error) {
  console.error("Error al editar el producto", error);
}} 
 
// Llamamos a la función
editProduct();

//  --------------- PETICIÓN DELETE ---------------

async function deleteProduct () {
  const url = `${API_BASE_URL/products/`${id}`}`;
  try {
    const response = await fetch (url, {
      method: "DELETE",
      headers: {
        "Content-Type":"Application/json",
    }}),
    if (!response.ok) {
      throw new Error ("Algo fue mal borrando el producto, inténtalo de nuevo", response.status)      
    } else {
      const data = response.json();
      console.log("Producto eliminado con éxito");
    }
  } catch (error) {
    console.error("Error al borrar el producto", error);
    
  }
}

// Llamamos a la función
deleteProduct();

//  --------------------FUNCIONES AUX-------------------------------