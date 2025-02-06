// Renderizar productos en la UI
function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Limpiar antes de renderizar
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        <button onclick="deleteProduct(${product.id})">❌ Eliminar</button>
      `;
  
      container.appendChild(productCard);
    });
  }
  
  // Cargar productos en la interfaz
  async function loadProducts() {
    const products = await getAllProducts();
    if (products) renderProducts(products);
  }
  
  // Ejecutamos al cargar la página
  loadProducts();
  