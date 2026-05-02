# Blogging Platform — MongoDB Schema Design

A MongoDB schema design for a blogging platform using **Mongoose** in Node.js.

## Project Structure

```
21 -Data Modeler (30-03)/
├── models/
│   ├── User.js         ← Authors & readers
│   ├── Category.js     ← Post categories
│   ├── Post.js         ← Blog articles
│   └── Comment.js      ← Comments & replies
├── db.js               ← MongoDB connection
├── seed.js             ← Sample data seeder
└── package.json
```

## Schema Design

### Collections & Relationships

```
User ──────────────────── author of ──► Post
User ──────────────────── author of ──► Comment
Category ──────────────── classifies ──► Post
Post ───────────────────── contains ──► Comment
Comment (parentComment) ── replies to ──► Comment
```

### User Schema
| Field | Type | Notes |
|---|---|---|
| `username` | String | Unique, required |
| `email` | String | Unique, lowercase |
| `password` | String | Hashed password |
| `bio` | String | Optional profile bio |
| `avatar` | String | Profile picture URL |
| `role` | String | `reader` / `author` / `admin` |
| `createdAt` | Date | Auto-generated |

### Category Schema
| Field | Type | Notes |
|---|---|---|
| `name` | String | Unique category name |
| `slug` | String | URL-friendly e.g. `web-development` |
| `description` | String | Optional description |

### Post Schema
| Field | Type | Notes |
|---|---|---|
| `title` | String | Required |
| `slug` | String | Unique URL-friendly title |
| `content` | String | Full article body |
| `excerpt` | String | Short preview text |
| `coverImage` | String | Image URL |
| `author` | ObjectId | → `User` |
| `category` | ObjectId | → `Category` |
| `tags` | [String] | Array of tag strings |
| `status` | String | `draft` / `published` / `archived` |
| `views` | Number | Default 0 |
| `likes` | Number | Default 0 |
| `createdAt` | Date | Auto-generated |

### Comment Schema
| Field | Type | Notes |
|---|---|---|
| `content` | String | Comment text |
| `author` | ObjectId | → `User` |
| `post` | ObjectId | → `Post` |
| `parentComment` | ObjectId | → `Comment` (null = top-level, otherwise a reply) |
| `likes` | Number | Default 0 |
| `createdAt` | Date | Auto-generated |

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start MongoDB locally
Make sure MongoDB is running on your machine:
```bash
mongod
```

### 3. Seed the database with sample data
```bash
node seed.js
```

### 4. View data in MongoDB Compass
Connect to: `mongodb://127.0.0.1:27017/blogDB`

You will see four collections: `users`, `categories`, `posts`, `comments`.
