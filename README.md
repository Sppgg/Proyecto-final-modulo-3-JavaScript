# Module 3 Final Project - Codespace Academy: JavaScript and Interactive Webpage

## Table of Contents

- [Module 3 Final Project - Codespace Academy: JavaScript and Interactive Webpage](#module-3-final-project---codespace-academy-javascript-and-interactive-webpage)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
    - [Objectives](#objectives)
  - [Project Structure](#project-structure)
  - [Features](#features)
    - [Algorithms](#algorithms)
    - [API-Based Web Application](#api-based-web-application)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Running the Algorithms](#running-the-algorithms)
    - [Using the API-Based Web Application](#using-the-api-based-web-application)
  - [Evaluation Criteria](#evaluation-criteria)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Introduction

This project is the culmination of the Module 3 curriculum at Codespace Academy, combining algorithmic problem-solving skills with the development of an interactive web application. It demonstrates proficiency in JavaScript, problem-solving, and web development fundamentals.

### Objectives

1. **Algorithms**: Solve 20 unique logical problems using JavaScript.
2. **API-Based Web Application**: Develop a dynamic, user-friendly webpage that interacts with the Fake Store API using GET, POST, PUT, and DELETE requests, including user authentication.

---

## Project Structure

The project repository is organized as follows:

```
proyecto-final-modulo-3-JavaScript/
│
├── algorithms/
│   ├── exercise1.js
│   ├── exercise2.js
│   ├── ...
│   └── exercise20.js
│
├── APIBasedWeb/
│   ├── src/
│   │   ├── index.html
│   │   ├── login.js
│   │   ├── main.js
│   │   ├── style.css
│   │   └── (additional assets and scripts)
│   ├── assets/
│   │   └── (images, icons, etc.)
│   ├── README.md
│   └── (other configuration files)
│
├── package.json
├── package-lock.json
├── vite.config.js (if using Vite)
└── README.md (this file)
```

---

## Features

### Algorithms

- **20 Algorithm Solutions**: Located in the `algorithms` directory, each exercise (`exercise1.js`, `exercise2.js`, ..., `exercise20.js`) contains a JavaScript file solving a unique logical problem.
- **Clean Code Practices**: Emphasis on proper use of loops, conditionals, functions, and meaningful variable names.
- **Documentation**: Each algorithm file includes comments explaining the logic and steps taken to solve the problem.

### API-Based Web Application

- **Public API Interaction**:
  - **GET**: Fetch and display data from the [Fake Store API](https://fakestoreapi.com/).
  - **POST**: Add new products via a user-friendly form.
  - **PUT**: Update existing products.
  - **DELETE**: Remove products through UI actions.
- **User Authentication**:
  - **Login Functionality**: Users must log in using the provided credentials to access and modify data.
    - **Username**: `mor_2314`
    - **Password**: `83r5^_`
  - **Protected Routes**: Ensures only authenticated users can modify data.
- **User Interface**:
  - Responsive and visually appealing design.
  - Features a dynamic list to display products from the API.
  - Interactive forms for adding and editing products in modal windows.
  - Buttons and confirmations for data modification and deletion.
  - Modal windows enhance the user experience for editing products.
- **Local Storage**:
  - Utilizes local storage to cache API data and authentication tokens for improved performance and user experience.
- **Error Handling and Validation**:
  - Informative messages for successful operations and error handling.
  - Form validations ensure data integrity when adding or editing products.

---

## Technologies Used

- **JavaScript**: For logic implementation, DOM manipulation, and API communication.
- **HTML5**: Semantic markup for structuring the web application.
- **CSS3**: Styling and responsive design for optimal user experience.
- **Fetch API**: To perform HTTP requests to the public API.
- **Local Storage**: To store user authentication tokens and cache API data.
- **Git & GitHub**: Version control and collaboration.
- **Vite**: Development server for faster builds and hot module replacement (optional).
- **Node.js & npm**: Package management and script running.

---

## Getting Started

### Prerequisites

- **Node.js and npm**: To run the development server and manage dependencies.
- **Git**: For version control.
- **Code Editor**: Such as Visual Studio Code.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Sppgg/Proyecto-final-modulo-3-JavaScript.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd proyecto-final-modulo-3-JavaScript
   ```

3. **Install Dependencies** (if using a development server like Vite):

   ```bash
   npm install
   ```

---

## Usage

### Running the Algorithms

1. Navigate to the `algorithms` directory:

   ```bash
   cd algorithms
   ```

2. Run each exercise individually using Node.js:

   ```bash
   node exercise1.js
   ```

   Repeat for each exercise (`exercise2.js`, ..., `exercise20.js`).

### Using the API-Based Web Application

1. **Navigate to the Web Application Directory**:

   ```bash
   cd APIBasedWeb/src
   ```

2. **Development Server (Recommended)**:

   - **Start the Server**:

     ```bash
     npm run dev
     ```

   - **Access the Application**:

     Open your browser and navigate to `http://localhost:5173`.

3. **Directly via Browser**:

   - Open `index.html` located in the `APIBasedWeb/src` directory in your preferred web browser.

4. **Application Features**:

   - **Login**:

     - Use the following credentials to log in:
       - **Username**: `mor_2314`
       - **Password**: `83r5^_`
     - Upon successful login, an authentication token is stored in local storage.

   - **View Products**:

     - Browse through the list of products fetched from the Fake Store API.
     - Products are displayed with images, descriptions, and prices.

   - **Add Products**:

     - Click on "Agregar Nuevo Producto" to open a form where you can input product details.
     - Submit the form to add the product to the list and the API.

   - **Edit Products**:

     - Click the "Editar" button on a product to open a modal window with an editable form.
     - Update the product information and save changes.
     - A "Cancelar" button is available to close the modal without saving changes.

   - **Delete Products**:

     - Click the "Eliminar" button on a product to remove it from the list and the API.
     - Confirmation prompts help prevent accidental deletions.

   - **Logout**:

     - Click the "Cerrar Sesión" button to log out.
     - The authentication token is removed from local storage, and the user is redirected to the login page.

---

## Evaluation Criteria

| Criterion                         | Weight |
|-----------------------------------|--------|
| Algorithm Solutions               | 40%    |
| Web Application Functionality     | 40%    |
| Design and User Experience        | 10%    |
| Documentation and Version Control | 10%    |

**Bonus Points**:

- **Form Validations**: Implement extra validations in forms to enhance data integrity.
- **Development Server**: Utilize Vite for an optimized development experience.

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**:

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Forked Repository**:

   ```bash
   git clone https://github.com/your-username/Proyecto-final-modulo-3-JavaScript.git
   ```

3. **Create a New Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Commit Your Changes**:

   ```bash
   git commit -m "Add your descriptive commit message"
   ```

5. **Push to Your Branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:

   Go to the original repository and open a pull request from your forked branch.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **Codespace Academy**: For providing the curriculum and resources.
- **Fake Store API**: For the API used in the web application.
- **Community Contributors**: For their valuable inputs and improvements.

---

**Happy Coding!** 🚀

---
