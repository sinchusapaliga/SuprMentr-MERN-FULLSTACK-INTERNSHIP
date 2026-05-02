# Route Master - Bookstore API

A simple Express-based REST API for managing a bookstore's collection of books and authors.

## Features
- **Books Management**: List, view details, add, update, and delete books.
- **Authors Management**: List, view details, add, update, and delete authors.
- **Data Persistence**: Uses a local `data.js` file for mock data storage.

## Project Structure
```text
.
├── routes/
│   ├── books.js      # Book-related route handlers
│   └── authors.js    # Author-related route handlers
├── data.js           # Sample data for books and authors
├── server.js         # Main entry point for the Express server
├── package.json      # Project dependencies and metadata
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone or download this repository.
2. Navigate to the project folder:
   ```bash
   cd "17 -Route Master (26-03)"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
Start the Express server by running:
```bash
node server.js
```
The server will start at `http://localhost:3000`.

## API Endpoints

### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/books` | Get all books |
| GET    | `/books/:id` | Get a specific book by ID |
| POST   | `/books` | Add a new book |
| PUT    | `/books/:id` | Update an existing book |
| DELETE | `/books/:id` | Delete a book |

### Authors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/authors` | Get all authors |
| GET    | `/authors/:id` | Get a specific author by ID |
| POST   | `/authors` | Add a new author |
| PUT    | `/authors/:id` | Update an existing author |
| DELETE | `/authors/:id` | Delete an author |

## Example Usage
To get details for book with ID 1:
`GET http://localhost:3000/books/1`

## License
This project is part of the SuprMentr MERN Fullstack Internship.
