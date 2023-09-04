# Your Application Name

Briefly describe your application and its purpose here.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [GraphQL Endpoints](#graphql-endpoints)
- [Architecture](#architecture)
- [Business Logic](#business-logic)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

List any prerequisites that users need to have installed on their system before they can begin using your application. For example:

- Node.js (v14 or higher)
- MongoDB (v4 or higher)

## Installation

Provide step-by-step instructions on how to install your application locally.

```bash
# Clone the repository
git clone https://github.com/Andrewchik/server-test.git

# Navigate to the project directory
cd server-test

# Install dependencies
npm install
```
## Configuration

Explain how to configure your application. This section should provide information on any necessary setup steps, including setting environment variables, creating configuration files, and connecting to databases. Make it easy for users to get your application up and running with clear instructions.

### Environment Variables

If your application relies on environment variables, provide guidance on setting them up. For example:

1. Create a `.env` file in the project root directory if it doesn't already exist.

2. Define the following environment variables in the `.env` file:

   ```env
   MONGODB_URI=your-mongodb-uri (or use my 'mongodb+srv://andrew:GoPro2323@cluster0.amrqtfy.mongodb.net/?retryWrites=true&w=majority')
   PORT=5000
   SECRET_KEY=your-secret-key
   ```
   
## Usage

Provide instructions on how to run and use your application locally. Include any necessary commands or scripts. For example:

```bash
# Start the server
npm start
```

## API Endpoints

This section provides an overview of the available API endpoints, their functionality, and example requests and responses.

### `GET /api/books`

Get a list of all books.

#### Request

- **Method**: `GET`
- **Endpoint**: `/api/books`

#### Response

- **Status Code**: `200 OK`

**Response Body**

```json
{
  "data": {
    "books": [
      {
        "id": "1",
        "title": "Sample Book 1",
        "author": "John Doe",
        "description": "A sample book description."
      },
      {
        "id": "2",
        "title": "Sample Book 2",
        "author": "Jane Smith",
        "description": "Another sample book description."
      }
    ]
  }
}
```


### `POST /api/books`

Create a new book.

#### Request

- **Method**: `POST`
- **Endpoint**: `/api/books`

**Request Body**

```json
{
  "title": "Sample Book",
  "author": "John Doe",
  "description": "A sample book description."
}
```

### `PUT /api/books/:id`

Update a book by its unique ID.

#### Request

- **Method**: `PUT`
- **Endpoint**: `/api/books/:id`

**URL Parameters**

- `id` (string): The unique ID of the book to update.

**Request Body**

```json
{
  "title": "Updated Book Title",
  "description": "Updated book description."
}
```

### `DELETE /api/books/:id`

Delete a book by its unique ID.

#### Request

- **Method**: `DELETE`
- **Endpoint**: `/api/books/:id`

**URL Parameters**

- `id` (string): The unique ID of the book to delete.

#### Response

- **Status Code**: `204 No Content`

This endpoint allows you to delete a book by specifying its unique ID in the URL parameters. There is no response body returned in this case, but the successful deletion is indicated by the `204 No Content` status code.

### GraphQL Endpoints

In addition to RESTful API endpoints, our application also utilizes GraphQL for certain operations.

#### Query: Fetch All Books

- **Query**: Fetch all books.
- **Endpoint**: `/graphql`
- **HTTP Method**: `POST`

**Query Body**

```json
{
  "query": "query {
    books {
      id
      title
      author
      description
    }
  }"
}
```
### Mutation: Delete a Book

- **Mutation**: Delete a book by ID.
- **Endpoint**: `/graphql`
- **HTTP Method**: `POST`

**Mutation Body**

```json
{
  "query": "mutation ($id: String!) {
    deleteBook(id: $id)
  }",
  "variables": {
    "id": "1" // Replace with the ID of the book to delete
  }
}
```

## Architecture

In this section, we'll provide an overview of the architecture and design decisions made for our application.

### Tech Stack

Our application is built using the following technologies and tools:

- **Node.js**: The runtime environment for our server.
- **Express.js**: A web application framework for building RESTful APIs.
- **MongoDB**: A NoSQL database used for storing book data.
- **GraphQL**: A query language and runtime for querying and manipulating data.
- **JSON Web Tokens (JWT)**: Used for user authentication and authorization.
- **React**: A JavaScript library for building the user interface.
- **Redux**: A state management library for managing application state.

### RESTful API vs. GraphQL

We've chosen to use a combination of RESTful API and GraphQL to meet different data retrieval needs within our application.

- **RESTful API**: We've implemented RESTful endpoints for basic CRUD operations on books, providing a simple and predictable way to manage book data.

- **GraphQL**: GraphQL is used for more complex queries, including fetching all books and handling book deletions. It offers flexibility in data retrieval and manipulation, allowing clients to request only the data they need.

### Database

Our application stores book data in a MongoDB database. The data is structured in a way that allows us to easily query and manage books.

### Authentication and Authorization

We've implemented authentication and authorization using JSON Web Tokens (JWT). When a user logs in, they receive a JWT token, which is included in subsequent requests to authenticate and authorize the user. This ensures that only authenticated users can perform certain actions, such as creating or deleting books.

### Middleware

We use middleware to handle various aspects of our application, including:

- **Authentication Middleware**: Ensures that requests with valid JWT tokens are authenticated.
- **Error Handling Middleware**: Catches and handles errors that may occur during request processing, providing meaningful error responses to clients.

### Folder Structure

Our project is organized into folders and files that follow a structured layout, separating concerns and promoting maintainability.

- **controllers**: Contains controller functions for handling different actions on books.
- **models**: Defines data models for books and users.
- **routes**: Defines the routes and endpoints for our RESTful API.
- **graphql**: Contains GraphQL schemas and resolvers for GraphQL queries and mutations.
- **middleware**: Includes custom middleware functions for authentication and error handling.

This architecture ensures that our application is scalable, maintainable, and follows best practices for building modern web applications.

### Business Logic

Our application's business logic is centered around managing books and user authentication. Here's an overview of the key business logic components:

#### Books Management

- **Creating Books**: Users can create new books by providing details such as title, author, and description. This functionality is available through the RESTful API and GraphQL.

- **Updating Books**: Existing books can be updated by specifying their unique ID. Users can modify the title and description of books using the RESTful API.

- **Fetching Books**: Books can be retrieved in multiple ways:
  - RESTful API: Allows users to fetch individual books by ID, get a list of all books, and fetch books specific to a user.
  - GraphQL: Provides flexibility in querying data, including fetching all books in a single request.

- **Deleting Books**: Books can be deleted by specifying their unique ID. When a book is deleted through the RESTful API, it is transferred to the user's collection of "My Books."

#### User Authentication

- **JWT Authentication**: Our application uses JSON Web Tokens (JWT) for user authentication. When a user logs in, they receive a JWT token, which is included in subsequent requests to authenticate and authorize the user.

- **User Registration**: New users can register by providing their username and password. The password is securely hashed and stored in the database.

- **User Login**: Registered users can log in by providing their credentials (username and password).

- **Authorization**: Authenticated users have specific privileges:
  - Creating and updating books (if they are the authors).
  - Deleting books (if they are the authors).
  - Fetching books, including their own collection of "My Books."

#### Error Handling

We've implemented error handling to ensure that our application provides informative error responses to clients. This includes handling validation errors, authentication failures, and other potential issues that may arise during request processing.

#### Security

Security is a paramount concern in our application:
- Passwords are securely hashed and stored.
- JWT tokens are used for secure user authentication.
- Proper validation and input sanitization are applied to prevent security vulnerabilities.

### Additional Details

We've strived to follow best practices in our application's architecture and development, including:
- Implementing separation of concerns by organizing code into models, controllers, routes, and GraphQL schemas.
- Using middleware for authentication and error handling.
- Employing a modular folder structure for maintainability.

Our application's architecture is designed to be scalable, maintainable, and secure, providing a solid foundation for future enhancements and improvements.


## Contributing

We welcome contributions from the community to help improve and enhance our application. If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix-name`.
3. Make your changes and commit them with meaningful messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, providing a detailed description of your changes.

We will review your pull request and collaborate with you to ensure that your contribution is successfully integrated into the project.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code in accordance with the terms and conditions of the MIT License.

For more details, please review the [LICENSE](LICENSE) file.

We encourage you to respect the licenses of any third-party libraries or resources used within this project.

