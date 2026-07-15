# 🍱 FoodHub Server

FoodHub Server is the backend REST API for the FoodHub meal ordering platform. It provides secure authentication, role-based authorization, meal management, order processing, category management, provider management, and user administration.

The backend is built with **Node.js**, **Express.js**, **PostgreSQL**, **Prisma ORM**, and **Better Auth**.

---

# 🌐 Live API

Backend API

https://your-backend-url.vercel.app

Frontend Repository

https://github.com/rifat-54/Food-Hub-Client

Frontend Live

https://your-frontend-url.vercel.app

---

# ✨ Features

## Authentication

- Email & Password Authentication
- Google OAuth Login
- Better Auth
- Session-based Authentication
- Secure HTTP-only Cookies
- Role-based Authorization

---

## Customer Features

- Register
- Login
- Update Profile
- Place Orders
- View Order History
- Leave Reviews

---

## Provider Features

- Create Provider Profile
- Add Meals
- Update Meals
- Delete Meals
- View Orders
- Update Order Status

---

## Admin Features

- Manage Users
- Suspend / Activate Users
- Manage Categories
- View All Orders

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Better Auth
- Google OAuth
- Zod
- CORS

---

# 📁 Project Structure

```
src
│
├── config
├── controllers
├── middleware
├── modules
├── prisma
├── routes
├── services
├── utils
├── app.ts
└── server.ts
```

---

# 🔐 Authentication

FoodHub uses **Better Auth** for authentication.

Supported authentication methods:

- Email & Password
- Google Login

Authentication uses secure session cookies and role-based authorization.

---

# 👥 User Roles

## Customer

- Browse Meals
- Place Orders
- Track Orders
- Submit Reviews

---

## Provider

- Manage Meals
- Manage Orders
- Update Order Status

---

## Admin

- Manage Users
- Manage Categories
- View All Orders

---

# 🗄 Database

Database

PostgreSQL

ORM

Prisma ORM

Main Models

- User
- Session
- Account
- Verification
- ProviderProfile
- Category
- Meal
- Order
- OrderItem
- Review

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/sign-up/email |
| POST | /api/auth/sign-in/email |
| POST | /api/auth/sign-out |
| GET | /api/auth/get-session |

---

## Meals

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/menu |
| GET | /api/v1/menu/:id |
| POST | /api/v1/menu |
| PATCH | /api/v1/menu/:id |
| DELETE | /api/v1/menu/:id |

---

## Categories

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/category |
| POST | /api/v1/category |
| DELETE | /api/v1/category/:id |

---

## Providers

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/provider |
| GET | /api/v1/provider/:id |
| POST | /api/v1/provider |
| GET | /api/v1/provider/allmeals |

---

## Orders

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/orders |
| GET | /api/v1/orders |
| GET | /api/v1/orders/:id |
| PATCH | /api/v1/orders/:id |
| GET | /api/v1/orders/provider |
| GET | /api/v1/orders/all |

---

## Users

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/user |
| GET | /api/v1/user/me |
| PATCH | /api/v1/user/:id |

---

## Reviews

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/review |
| GET | /api/v1/review/:mealId |

---

# ⚙️ Environment Variables

Create a `.env` file.

```env
PORT=

DATABASE_URL=

APP_URL=

BETTER_AUTH_URL=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/rifat-54/Food-Hub-Server.git
```

Go to project directory

```bash
cd Food-Hub-Server
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Database Migration

```bash
npx prisma migrate dev
```

Start Development Server

```bash
npm run dev
```

---

# 📦 Available Scripts

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Start Production

```bash
npm start
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# 🔒 Security

- Password Hashing
- HTTP-only Cookies
- Session Authentication
- Role-based Authorization
- Input Validation
- CORS Protection

---

# 📌 Deployment

Backend

Vercel

Database

Neon PostgreSQL

---

# 👨‍💻 Author

**MD. Mashur Rahman Rifat**

GitHub

https://github.com/rifat-54

Portfolio

https://portfollio-rifat-54.web.app/

---

# 📄 License

This project was developed as an academic assignment for educational purposes.