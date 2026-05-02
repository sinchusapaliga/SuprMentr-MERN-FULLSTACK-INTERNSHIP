# Connect the Stack ⚡

A premium full-stack MERN (MongoDB, Express, React, Node.js) application featuring JWT authentication and role-based access control (RBAC). This project connects a live React frontend to a functional backend API.

## 🚀 Features

- **Authentication**: Secure Signup and Login using JWT.
- **RBAC (Role Based Access Control)**:
  - **User**: Can access their own profile.
  - **Admin**: Can access the Profile and a restricted Admin Dashboard.
- **Security**:
  - Hashed passwords using `bcryptjs`.
  - Protected API routes via custom middleware.
  - Axios interceptors for automatic JWT attachment.
  - Environment variables for sensitive configuration.
- **UI/UX**:
  - Dark-mode glassmorphism design.
  - Responsive stat cards and dashboard.
  - Responsive Navbar with role badges.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Router, Axios, Vanilla CSS.
- **Backend**: Node.js, Express, Mongoose.
- **Database**: MongoDB (Local).
- **Security**: JSON Web Tokens (JWT), Bcrypt.

---

## 📦 Installation & Setup

### 1. Prerequisites
- MongoDB installed and running locally.
- Node.js installed.

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/connectTheStackDB
JWT_SECRET=your_secret_key_here
```
Run the backend:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend` folder:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```
Run the frontend:
```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/signup` | Register a new user | Public |
| **POST** | `/api/auth/login` | Login and get token | Public |
| **GET** | `/api/profile` | View user profile | User / Admin |
| **GET** | `/api/admin-dashboard`| Admin stats | Admin Only |

---

## 📂 Project Structure

```
25 -Connect the Stack (11-04)/
├── backend/
│   ├── controllers/      # Logic for auth
│   ├── middleware/       # JWT & Role guards
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API route definitions
│   └── server.js         # Entry point
├── frontend/
│   ├── src/
│   │   ├── api/          # Axios configuration
│   │   ├── components/   # Reusable UI elements
│   │   ├── context/      # Global Auth State
│   │   ├── pages/        # Main views
│   │   └── App.jsx       # Routing logic
│   └── .env              # Frontend config
└── README.md             # You are here
```
