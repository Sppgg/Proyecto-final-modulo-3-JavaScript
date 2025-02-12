/* LOG IN
AUTENTICACIÓN PARA ENTRAR A LA WEB */

// Función para mostrar u ocultar secciones según el estado de autenticación

function checkAuth() {
    const token = localStorage.getItem("authToken");
    if (token) {
        // Usuario autenticado
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-container").style.display = "block";
        loadAndDisplayProducts();
    } else {
        // Usuario no autenticado
        document.getElementById("login-container").style.display = "block";
        document.getElementById("main-container").style.display = "none";
    }
  }
  
  // Función para manejar el login
  async function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error(`Error en la autenticación. Código: ${response.status}`);
        } else {
            const data = await response.json();
            console.log("Autenticación exitosa:", data);
            // Guardar el token en Local Storage
            localStorage.setItem("authToken", data.token);
            // Limpiar el formulario
            document.getElementById("login-form").reset();
            // Verificar autenticación y mostrar la sección principal
            checkAuth();
        }
    } catch (error) {
        console.error("Error al autenticarse", error);
        alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  }
  
  // Función para cerrar sesión
  function logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("products"); // Opción: limpiar los productos almacenados
    checkAuth();
  }
  
  // Agregar eventos al formulario de login y botón de logout
  document.getElementById("login-form").addEventListener("submit", login);
  document.getElementById("logout-button").addEventListener("click", logout);