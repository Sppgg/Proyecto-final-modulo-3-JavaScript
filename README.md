Final Project Module 3: JavaScript Algorithms and Interactive Webpage

Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Evaluation Criteria](#evaluation-criteria)
- [Contributing](#contributing)

---

## Introduction
This project is the culmination of the Module 3 curriculum, combining algorithmic problem-solving skills with the development of an interactive web application. The primary objectives are:
1. To solve logical problems using JavaScript through 20 unique algorithms.
2. To develop a dynamic, user-friendly webpage that communicates with a public API using GET, POST, PUT, and DELETE requests.

By completing this project, I will demonstrate proficiency in JavaScript, problem-solving, and web development fundamentals.

---

 Features

 Algorithms
- Solve 20 Algorithms: Organized in the `algorithms` folder, with each solution in its respective file (e.g., `exercise1.js`, `exercise2.js`, etc.).
- Best Practices: Emphasis on proper use of loops, conditionals, functions, and meaningful naming conventions.

 Web Application
- Data Interaction:
  - Fetch and display data from a public API (GET).
  - Add new data via a form (POST).
  - Update existing data (PUT).
  - Delete data through UI actions (DELETE).
- User Interface:
  - Responsive and visually appealing design.
  - Features a table or list to display API data.
  - Interactive form for adding and editing data.
  - Buttons for data modification and deletion.

---

 Project Structure
The project repository is organized as follows:
```
project-final-mod3/
│
├── algorithms/
│   ├── exercise1.js
│   ├── exercise2.js
│   └── ... (up to exercise20.js)
│
├── APIBasedWeb/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
```



## Technologies Used

 Algorithms
- JavaScript: To solve logical problems efficiently.

 Web Application
- HTML5: For semantic structure.
- CSS3: For styling and responsive design.
- JavaScript: To handle DOM manipulation and API requests.
- Fetch: For HTTP requests.
- Git/GitHub: For version control.

---

 Getting Started

 Prerequisites
Ensure you have the following installed:
- A code editor (e.g., VS Code).
- Node.js and npm (if you want to use a development server or Axios).
- Git for version control.

 Steps
1. Clone the repository:
   ```bash
   git clone [https://github.com/Sppgg/Proyecto-final-modulo-3-JavaScript.git]
   ```
2. Navigate to the repository:
   ```bash
   cd proyecto-final-modulo-3
   ```
3. Open the project in your preferred code editor.

---

 Configuration

 Web Application
- If using a development server (like Vite):
  1. Install dependencies:
     ```bash
     npm install
     ```
  2. Run the development server:
     ```bash
     npm run dev
     ```
  3. Access the project in your browser at `http://localhost:5173`.

 SASS (Optional)
- To use SASS for enhanced styling:
  1. Install SASS:
     ```bash
     npm install -g sass
     ```
  2. Compile SASS to CSS:
     ```bash
     sass styles.scss styles.css
     ```

---

 Usage

 Algorithms
- Navigate to the `algorithms` folder.
- Open and run each JavaScript file (`exercise1.js`, `exercise2.js`, etc.) to see the solutions.

 Web Application
1. Open `index.html` in a browser.
2. Explore the functionalities:
   - View data fetched from the API.
   - Add new data using the form.
   - Edit existing data by clicking the edit button.
   - Delete unwanted data with the delete button.

---

 Evaluation Criteria

| Criterion                          | Weight |
|------------------------------------|--------|
| Algorithm Solutions                | 40%    |
| Webpage Functionality              | 40%    |
| Design and User Experience         | 10%    |
| Documentation and Version Control  | 10%    |

Bonus Points:
- Add extra form validations.
- Use Vite as the development server.

---

 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

Your contributions are appreciated and help improve this project!

---

Happy Coding! 🚀
```
