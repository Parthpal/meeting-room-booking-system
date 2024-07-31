# Meeting Room Booking System

A comprehensive solution for booking meeting rooms, managing slots, and handling user data.

## Live URL

https://assignment-3-meeting-room-system.vercel.app/

## Features

- User Authentication
- Room Management
- Slot Booking
- Admin and User Roles
- Data Validation with Zod
- RESTful API

## Technology Used

- Node.js
- Express
- TypeScript
- Mongoose (MongoDB)
- Zod for Validation
- Bcrypt for Password Hashing
- JSON Web Token for Authentication

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Parthpal/meeting-room-booking-system
   cd meeting-room-booking-system
2. **Install dependencies**
   npm install
3. **Set up environment variables:**
    - Create a .env file in the root directory and add your MongoDB connection string and JWT secret:
    - NODE_ENV=developement
    - PORT=5000
    - DATABASE_URL=mongodb+srv://mongo_***:mongo_***@cluster0.kf7gnio.mongodb.netmeeting-room-booking-system?retryWrites=true&w=majority&appName=Cluster0
    - BCRYPT_SALT_ROUNDS=12
    - DEFAULT_PASS=
    - JWT_ACCESS_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDYyOWI4ZThjZmNkOTI2Mzg0YjZlNWUiLCJuYW1lIjoiUHJvZ3JhbW1pbmcgSGVyb3MiLCJlbWFpbCI6IndlYkBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5MCIsInJvbGUiOiJhZG1pbiIsImFkZHJlc3MiOiIxMjMgTWFpbiBTdHJlZXQsIENpdHksIENvdW50cnkiLCJpYXQiOjE2MjQ1MTY2MTksImV4cCI6MTYyNDUyMDYxOX0.kWrEphO6lE9P5tvzrNBwx0sNogNuXpdyG-YoN9fB1W8
    - JWT_ACCESS_EXPIRES_IN=1h
4. **Build the project:**
npm run build
5. **Run the project in development mode:**
npm run start:dev
6.**Run the project in production mode:**
npm run start:prod
