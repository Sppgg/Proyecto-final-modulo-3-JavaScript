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

async function renderProducts() {
  const products = await getAllProducts();
  const container = document.getElementById("products-container");

  container.innerHTML = ""; // Limpia el contenido antes de agregar nuevos productos

  products.forEach(products => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}" width="100">
      <h3>${product.title}</h3>
      <p>Precio: $${product.price}</p>
      <p>${product.description}</p>
      <button>Editar</button>
      <button>Eliminar</button>
    `;

    container.appendChild(productElement);
  });
}

// Llamamos a la función para que se ejecute al cargar la página
renderProducts();

//  --------------- PETICIÓN POST ---------------
//  --------------- PETICIÓN PUT ---------------
//  --------------- PETICIÓN DELETE ---------------
