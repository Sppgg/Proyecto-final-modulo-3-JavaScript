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
      return products; // Retornamos los productos para poder usarlos más adelante
    }

  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return []; 
    // Devuelve un array vacío en caso de error para evitar fallos en la UI
  }
}

// Llamar la función y probar en consola
getAllProducts()

// getAllProducts por sí solo en un console log imprimirá una promesa pendiente. usando .then(+arrow function) espera a que la Promesa se resuelva y luego imprime los datos.


//  --------------- PETICIÓN POST ---------------

async function createNewProduct (newProduct) {
  let url = `${API_BASE_URL}/products`;
  try {
    const response = await fetch (url, {
      method: "POST",
      headers: 
      {"Content-Type": "application/json"},
      body: JSON.stringify(newProduct),
    })
    if (!response.ok) {
      throw new Error (`Error inesperado creando tu producto, inténtalo de nuevo`, response.status);      
    } else {
      const data = await response.json();
      console.log("Producto creado con éxito");
    }
  } catch (error) {
    console.error("Error al crear el producto", error);
  }
}
// Creamos un producto nuevo
  const newProduct = {
  title: "RGB Keyboard",
  price: 49.99,
  description: "gaming keyboard",
  image: "https://img.freepik.com/free-photo/keyboard-with-neon-lights-high-angle_23-2149680226.jpg?semt=ais_hybrid",
  category: "electronics" 
}
// Llamar a la función

createNewProduct(newProduct);

//  --------------- PETICIÓN PUT ---------------

async function editProduct (id, updatedData) {
  const url = `${API_BASE_URL}/products/${id}`;
try {
  const response = await fetch (url, {
   method: "PUT",
   headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(updatedData),
})
if (!response.ok) {
  throw new Error ("Algo fue mal, inténtalo de nuevo", response.status); 
} else {
 const data = response.json();
console.log("Producto editado con éxito"); 
return data;
}
}
catch (error) {
  console.error("Error al editar el producto", error);
}
} 
const updatedData = {
  title: 'laptop case',
  price: 1200.99,
  description: 'lorem ipsum set',
  image: 'https://media.istockphoto.com/id/1051663116/es/foto/hombre-de-negocios-joven-sacando-un-ordenador-port%C3%A1til-en-un-estuche-de-piel-en-la-oficina.jpg?s=612x612&w=is&k=20&c=88MkTtSGtRUW60RNln06xA_eTzP2Z0R_xkht4M9IAx0=',
  category: 'electronics',
};

// Llamamos a la función
editProduct(1, updatedData);

//  --------------- PETICIÓN DELETE ---------------

async function deleteProduct (id) {
  const url = `${API_BASE_URL}/products/${id}`;
  try {
    const response = await fetch (url, {
      method: "DELETE",
      headers: {
        "Content-Type":"Application/json",
    },})
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
deleteProduct(8);

//  --------------------FUNCIONES AUX-------------------------------

//Función Auxiliar para mostrar todos los productos

function displayAll(products) {
  // convertimos el contenedor HTML en una constante para poder trabajar en él
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  // creamos una tarjeta para cada producto
  products.forEach(product => {
    // creamos una constante para convertir cada producto en un elemento HTML
    const productElement = document.createElement("div");
    productElement.id = `product-${product.id}`;
    productElement.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p>Price: ${product.price}€</p>
    <img src="${product.image}" alt="${product.title}" width="100"/>`;

    // Añadimos un botón funcional que elimine productos
    const deleteButton = document.createElement("button");
    deleteButton.textContent= "Delete";
    deleteButton.addEventListener("click",() => deleteProduct(product.id));
    productElement.appendChild(deleteButton);

    // Añadimos un botón que edite los productos renderizados
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => 
      showEditForm(
        product.id,
        product.title,
        product.price,
        product.description,
        product.image,
        product.category
      )
    );
    productElement.appendChild(editButton);

    productsContainer.appendChild(productElement);
  });

}
// Esperamos a obtener los productos antes de mostrarlos
async function loadAndDisplayProducts() {
  const products = await getAllProducts(); // Esperamos a obtener los datos
  displayAll(products); // Ahora sí los mostramos en la UI
}

// Llamamos a la función al cargar la página
loadAndDisplayProducts();

displayAll(products);