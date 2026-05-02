# CRUD Lab — Mongoose Implementation

This project is a hands-on lab demonstrating how to perform **CRUD** (Create, Read, Update, Delete) operations using **Mongoose** and **MongoDB** in a Node.js environment.

## 📋 Table of Contents
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [How to Run](#-how-to-run)
- [Concepts Covered](#-concepts-covered)

---

## 🛠 Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)

---

## 🚀 Installation

1. Navigate to the project directory:
   ```bash
   cd "22 -CRUD Lab (03-04)"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 📁 Project Structure

```text
├── models/
│   └── User.js       # Mongoose User Schema
├── db.js             # Database connection logic
├── crud.js           # Master script (All operations)
├── create.js         # Single operation: Create
├── read.js           # Single operation: Read
├── update.js         # Single operation: Update
├── delete.js         # Single operation: Delete
├── clear.js          # Helper: Wipes the collection
└── package.json      # Dependencies and scripts
```

---

## 🏃 How to Run

### 1. Master Demo
To see all operations run sequentially in one go:
```bash
node crud.js
```

### 2. Individual Operations
You can also run each operation independently to see the granular effects:
- **Create Alice**: `node create.js`
- **View All Users**: `node read.js`
- **Update Alice to Admin**: `node update.js`
- **Delete Alice**: `node delete.js`
- **Wipe Database**: `node clear.js`

---

## 🧠 Concepts Covered

### What is Mongoose?
Mongoose is an **ODM (Object Data Modeling)** library. It provides a straight-forward, schema-based solution to model your application data and includes built-in type casting, validation, and query building.

### The CRUD Operations:
1.  **Create**: Using `User.create()` or `new User().save()` to add documents.
2.  **Read**: Using `User.find()` or `User.findOne()` to retrieve data.
3.  **Update**: Using `User.findOneAndUpdate()` to modify existing records.
4.  **Delete**: Using `User.findOneAndDelete()` to remove records.

---
