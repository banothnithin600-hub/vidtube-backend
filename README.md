# VidTube Backend

A YouTube-like backend built with Node.js, Express.js, MongoDB, Cloudinary, and JWT Authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- Refresh Tokens
- Cloudinary Image Upload
- MongoDB Database
- Secure Password Hashing using bcrypt
- REST APIs

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- cors
- dotenv
- multer
- cloudinary
- mongoose-aggregate-paginate-v2
- nodemon (dev)
- prettier (dev)
## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=8000

MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=vidtube

CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run the server:

```bash
npm run dev
```

## API Endpoints

### Health Check

```http
GET /api/v1/healthcheck
```

### User Registration

```http
POST /api/v1/users/register
```

### User Login

```http
POST /api/v1/users/login
```

## Project Structure

```text
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── db/
├── app.js
└── index.js
```

## Author

Banoth Nithin
ECE Sophomore @ NIT Patna
Aspiring Software Engineer