# Blog MERN Complete Starter

## Features
- MERN stack (MongoDB, Express, React, Node)
- JWT authentication
- Vite + React frontend (type=module)
- Light theme CSS with scrollable content areas
- Icons (react-icons) and framer-motion animations
- Correct connection between frontend and backend using VITE_API_URL

## How to run

### Server
cd server
npm install
cp .env.example .env
# set MONGODB_URL and JWT_SECRET in .env
npm run dev

### Client
cd client
npm install
cp .env.example .env
# set VITE_API_URL in .env (e.g. http://localhost:5000)
npm run dev

