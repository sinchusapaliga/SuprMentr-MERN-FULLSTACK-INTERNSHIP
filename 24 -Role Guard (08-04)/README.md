# Role Guard Assignment

This project extends the secure login system by adding **Role-Based Access Control (RBAC)**.

## 🔑 Key Features
- **Roles**: Users can be assigned `user` or `admin` roles.
- **Authorization Middleware**: Custom middleware to verify JWT and restrict routes based on user roles.
- **Protected Routes**:
    - `/api/profile`: Accessible by anyone with a valid token.
    - `/api/admin-dashboard`: Accessible ONLY by users with the `admin` role.

## 🚀 Setup & Run

1. **Install dependencies**: `npm install`
2. **Start the Server**: `node server.js`

## 📡 API Testing (Postman)

### 1. Signup (Admin)
`POST /api/auth/signup`
```json
{
  "username": "admin_user",
  "password": "adminpassword",
  "role": "admin"
}
```

### 2. Login
`POST /api/auth/login` (Returns token)

### 3. Access Admin Dashboard
`GET /api/admin-dashboard`
- **Header**: `Authorization: Bearer <YOUR_TOKEN>`

---
*Assignment: Role Guard*
