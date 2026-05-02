# Secure Login Assignment

This project demonstrates a secure authentication system using **Node.js**, **Express**, **Mongoose**, **bcryptjs**, and **JWT**.

## 🔑 Key Features
- **Password Hashing**: Uses `bcryptjs` to hash passwords before storing them in MongoDB.
- **JWT Authentication**: Generates a JSON Web Token upon successful login for stateless authentication.
- **MVC Architecture**: Separated concerns into Models, Controllers, and Routes.

## 🛠 Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

## 🚀 Setup & Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Ensure `.env` exists with the following:
   ```text
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/secureLoginDB
   JWT_SECRET=supersecretkey123
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

## 📡 API Endpoints

### 1. User Signup
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "username": "john_doe",
    "password": "securepassword123"
  }
  ```

### 2. User Login
- **URL**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "username": "john_doe",
    "password": "securepassword123"
  }
  ```
- **Response**: Returns a JWT `token`.

---
*Assignment: Secure Login*
