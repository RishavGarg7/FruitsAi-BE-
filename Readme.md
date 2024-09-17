# Fruit.ai - Backend

This is the backend for the **Fruit.ai** health manager application, built using MERN. It provides RESTful API endpoints for managing FAQs and enables communication with the React frontend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Features

- RESTful API with CRUD operations for FAQs.
- CORS enabled for cross-origin communication with the frontend.
- Environment variable management using `dotenv`.
- Basic error handling and input validation.

## Tech Stack

- **Backend:** `Node.js`, `Express`
- **Middleware:** `body-parser`, `bcrypt, `cors`, `dotenv`
- **Database:** `MongoDB`

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/fruit-ai-backend.git
   cd fruit-ai-backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   - Create a `.env` file in the root directory:
     ```
     PORT=8000
     MONGODB_URL="your-connection-string"
     ```

4. **Run the Server:**
   ```bash
   npm start
   ```
   - The backend will run on `http://localhost:8000`.

## Project Structure

- **src/**: Main source code directory
  - **routes/**: Contains route handlers for the API (e.g., `faq.routes.js`).
  - **controllers/**: Holds business logic for handling requests (e.g., `faq.controller.js`).
  - **models/**: Data models.
  - **config/**: Database Connection.
  - **server.js**: Entry point to start the Express server.
- **.env**: Environment variables file (e.g., `PORT=8000`).
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Lists project dependencies and metadata.
- **README.md**: Documentation file for the backend.

## API Endpoints

### Base URL: `http://localhost:8000`

- **GET /faqs**: Retrieve all FAQs.
- **POST /faqs**: Create a new FAQ.
- **PUT /faqs/:id**: Update an existing FAQ by ID.
- **DELETE /faqs/:id**: Delete an FAQ by ID.

### Example Request (POST /faqs)

```json
{
  "name": "Fruit.ai",
  "title": "What is Fruit.ai?",
  "desc": "Fruit.ai is a health manager application."
}
```
