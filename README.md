# Students Table – Full Stack Assignment

## Project Overview

This project is a **Students Table Management Application** built using **React.js for the frontend** and **Node.js with Express and PostgreSQL for the backend**.

The application allows users to perform **CRUD operations (Create, Read, Update, Delete)** on student records.
It also includes **form validation, loading simulation, and Excel export functionality**.

This project was created as part of a **Full Stack Developer assignment**.

---

## Features

* Display students in a table
* Add new students
* Edit existing students
* Delete students with confirmation
* Form validation (all fields required, valid email format)
* Simulated loading state
* Export student data to Excel
* Responsive and clean UI
* REST API integration with PostgreSQL

---

## Technologies Used

### Frontend

* React.js
* Axios
* CSS
* XLSX library (Excel export)

### Backend

* Node.js
* Express.js
* PostgreSQL
* pg (PostgreSQL driver)
* CORS

### Deployment

* Frontend: Netlify
* Backend: Render

---

## Project Structure

```
student-table-project
│
├── backend
│   ├── server.js
│   ├── package.json
│
└── frontend
    ├── src
    │   ├── components
    │   │   ├── StudentForm.jsx
    │   │   ├── StudentTable.jsx
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    │
    ├── package.json
```

---

## Installation & Setup

### Clone Repository

```
git clone https://github.com/nishikant636/student-table-project.git
```

---

### Backend Setup

Navigate to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start server:

```
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /students     | Get all students |
| POST   | /students     | Add new student  |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

---

## Live Deployment

Frontend (Netlify):

```
https://student-table-project.netlify.app
```

Backend (Render):

```
https://student-table-project.onrender.com
```

---

## Author

**Nishikant Gupta**

Full Stack Developer (Java & React)

GitHub:
https://github.com/nishikant636

---

## Future Improvements

* Add search functionality
* Add pagination
* Improve UI using Material UI or Bootstrap
* Add authentication
