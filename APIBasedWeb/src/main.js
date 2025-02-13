const API_BASE_URL = "https://fakestoreapi.com";
/* COMENZAMOS
CON
EL 
C R U D */

// --------------- PETICIÓN GET ---------------

async function getAllProducts() {
  let products = [];

  // Intentar obtener los productos del Local Storage
  const localData = localStorage.getItem("products");
  if (localData) {
      console.log("Cargando productos desde Local Storage...");
      products = JSON.parse(localData);
  } else {
      // Hacer la petición a la API
      console.log("Cargando productos desde la API...");
      let url = `${API_BASE_URL}/products`;
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`Error inesperado: ${response.status}`);
          } else {
              products = await response.json();
              // Guardar los productos en Local Storage
              localStorage.setItem("products", JSON.stringify(products));
          }
      } catch (error) {
          console.error("Error al obtener los productos:", error);
          return [];
      }
  }
  return products;
}

// --------------- PETICIÓN POST ---------------

async function createNewProduct(newProduct) {
  const token = localStorage.getItem("authToken");
  let url = `${API_BASE_URL}/products`;
  try {
      const response = await fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
          throw new Error(`Error inesperado creando tu producto. Código: ${response.status}`);
      } else {
          const data = await response.json();
          console.log("Producto creado con éxito:", data);
          // Agregar el nuevo producto al Local Storage
          const products = await getAllProducts();
          products.push(data);
          localStorage.setItem("products", JSON.stringify(products));
          // Actualizar la lista de productos
          displayAll(products);
      }
  } catch (error) {
      console.error("Error al crear el producto", error);
  }
}

// --------------- PETICIÓN PUT ---------------

async function editProduct(id, updatedData) {
  const token = localStorage.getItem("authToken");
  const url = `${API_BASE_URL}/products/${id}`;
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
          throw new Error(`Algo fue mal, inténtalo de nuevo. Código: ${response.status}`);
      } else {
          const data = await response.json();
          console.log("Producto editado con éxito:", data);
          // Actualizar el producto en el Local Storage
          let products = await getAllProducts();
          products = products.map(product => product.id === id ? data : product);
          localStorage.setItem("products", JSON.stringify(products));
          // Actualizar la lista de productos y ocultar el formulario de edición
          displayAll(products);
          document.getElementById("modal-form-container").innerHTML = "";
      }
  } catch (error) {
      console.error("Error al editar el producto", error);
  }
}

// --------------- PETICIÓN DELETE ---------------

async function deleteProduct(id) {
  const token = localStorage.getItem("authToken");
  const url = `${API_BASE_URL}/products/${id}`;
  try {
      const response = await fetch(url, {
          method: "DELETE",
          headers: {
              "Authorization": `Bearer ${token}`
          }
      });
      if (!response.ok) {
          throw new Error(`Algo fue mal borrando el producto, inténtalo de nuevo. Código: ${response.status}`);
      } else {
          console.log("Producto eliminado con éxito");
          // Eliminar el producto del Local Storage
          let products = await getAllProducts();
          products = products.filter(product => product.id !== id);
          localStorage.setItem("products", JSON.stringify(products));
          // Remover el elemento del DOM
          const productElement = document.getElementById(`product-${id}`);
          if (productElement) {
              productElement.remove();
          }
      }
  } catch (error) {
      console.error("Error al borrar el producto", error);
  }
}

/* FUNCIONES
AUXILIARES */

// Mostrar todos los productos en el DOM
function displayAll(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.id = `product-${product.id}`;
      productElement.innerHTML = `
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>Precio: ${product.price}€</p>
          <p>Categoría: ${product.category}</p>
          <img src="${product.image}" alt="${product.title}"/>
      `;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", () => deleteProduct(product.id));
      productElement.appendChild(deleteButton);

      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
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

// Función para cargar y mostrar los productos
async function loadAndDisplayProducts() {
  const products = await getAllProducts();
  displayAll(products);
}

// Función para mostrar el formulario de edición en una ventana modal
function showEditForm(id, title, price, description, image, category) {
    // Obtener elementos del DOM
    const modal = document.getElementById("myModal");
    const modalFormContainer = document.getElementById("modal-form-container");
  
    // Mostrar la modal
    modal.style.display = "block";
  
    // Insertar el formulario de edición en la modal
    modalFormContainer.innerHTML = `
      <form id="edit-product-form">
        <h2>Editar Producto</h2>
        <input type="text" id="edit-title" value="${title}" required>
        <input type="number" id="edit-price" value="${price}" required>
        <textarea id="edit-description" required>${description}</textarea>
        <input type="text" id="edit-image" value="${image}" required>
        <input type="text" id="edit-category" value="${category}" required>
        <button type="submit">Guardar Cambios</button>
        <button type="button" id="cancel-button">Cancelar</button>
      </form>
    `;
  
    // Añadir evento al formulario de edición
    document.getElementById("edit-product-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const updatedData = {
        title: document.getElementById("edit-title").value,
        price: parseFloat(document.getElementById("edit-price").value),
        description: document.getElementById("edit-description").value,
        image: document.getElementById("edit-image").value,
        category: document.getElementById("edit-category").value,
      };
      editProduct(id, updatedData);
      // Cerrar la modal
      modal.style.display = "none";
    });
  
    // Añadir evento al botón de cancelar
    document.getElementById("cancel-button").addEventListener("click", function() {
      // Cerrar la modal sin guardar cambios
      modal.style.display = "none";
    });
  }
  
  

  
    

// Evento para el formulario de agregar nuevo producto
document.getElementById("add-product-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const newProduct = {
      title: document.getElementById("new-title").value,
      price: parseFloat(document.getElementById("new-price").value),
      description: document.getElementById("new-description").value,
      image: document.getElementById("new-image").value,
      category: document.getElementById("new-category").value,
  };
  createNewProduct(newProduct);

  // Limpiar el formulario después de agregar el producto
  event.target.reset();
});

// Al cargar la página, verificar la autenticación
window.onload = checkAuth;
