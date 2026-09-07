# VidTube Backend

VidTube is a YouTube-like backend project built using Node.js, Express.js, MongoDB, JWT, and Cloudinary.

I built this project to practice backend development, REST APIs, authentication, database handling, and file uploads.

## Features

* User registration and login
* JWT authentication
* Access and refresh tokens
* Password hashing using bcrypt
* MongoDB database
* Cloudinary for image uploads
* Multer for handling file uploads
* Cookie-based authentication
* REST APIs
* CORS support

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Cloudinary
* Multer
* cookie-parser
* cors
* dotenv
* mongoose-aggregate-paginate-v2

## Project Structure

```text
vidtube-backend/
│
├── public/
│   └── temp/
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── index.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/banothnithin600-hub/vidtube-backend.git
cd vidtube-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root folder.

You can use `.env.example` as a reference.

```env
PORT=8000

MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=vidtube

CORS_ORIGIN=http://localhost:5173

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Don't push the `.env` file to GitHub because it contains private credentials.

### 4. Start the server

For development:

```bash
npm run dev
```

The server will start on:

```text
http://localhost:8000
```

## API Endpoints

### Health Check

```http
GET /api/v1/healthcheck
```

Used to check whether the server is running.

### User Registration

```http
POST /api/v1/users/register
```

Creates a new user account.

### User Login

```http
POST /api/v1/users/login
```

Logs in an existing user and handles authentication using JWT.

> More endpoints will be added here as the project grows.

## Authentication

The project uses JWT for authentication.

There are two tokens:

* Access Token
* Refresh Token

The access token is used for authenticated requests, while the refresh token is used to get a new access token when needed.

## Database

MongoDB is used as the database and Mongoose is used to work with MongoDB from Node.js.

The project currently has separate models and controllers to keep the backend organized.

## Cloudinary

Cloudinary is used to store uploaded images/media.

Cloudinary credentials are added through the `.env` file.

## Security

Some of the security practices used in this project:

* Passwords are hashed using bcrypt
* JWT is used for authentication
* Secrets are stored in environment variables
* `.env` is not meant to be committed
* Authentication middleware is used for protected routes

## Future Improvements

Some things I plan to add/improve:

* Video upload and management
* Comments
* Likes
* Subscriptions
* Playlists
* Search
* Watch history
* Better API documentation
* Testing
* Deployment

## Author

**Banoth Nithin**

ECE Student @ NIT Patna
Aspiring Software Engineer

GitHub: https://github.com/banothnithin600-hub
