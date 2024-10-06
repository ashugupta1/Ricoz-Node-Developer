# User API

A simple Node.js application for managing users using Express and Mongoose. This API allows you to create, retrieve, and update user records in a MongoDB database.

## Features

- Create a new user
- Retrieve all users
- Update existing user information

## Tech Stack

- Node.js
- Express.js
- Mongoose
- MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or hosted)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashugupta1/Ricoz-Node-Developer.git

2. Navigate to the project directory:
   cd your-repo-name

3. Install the dependencies:
   npm install

4. Create a .env file in the root directory and add your MongoDB URI:
   MONGO_URI=mongodb://localhost:27017/your_db_name
   PORT=5000
   
6. Running the Application
   npm start

7. API Endpoints
 (http://localhost:3000/api/users)

9. Method: POST
10. Requested Body
  {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
  }
