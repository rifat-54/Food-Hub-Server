# 🍱 FoodHub Server

FoodHub Server is the backend REST API for the FoodHub meal ordering platform. It powers authentication, authorization, meal management, order processing, category management, provider management, and user administration.

Built with **Node.js**, **Express.js**, **PostgreSQL**, **Prisma ORM**, and **Better Auth**, the server provides secure session-based authentication and role-based access control for Customers, Providers, and Admins.

---

## 🌐 Live Links

### Backend Live
https://food-hub-server-blue.vercel.app

### Frontend Live
https://food-hub-client-iota.vercel.app

### Frontend Repository
https://github.com/rifat-54/Food-Hub-Client

---

# 🚀 Features

## Authentication

- Email & Password Authentication
- Google OAuth Login
- Better Auth
- Secure Session Authentication
- Role-based Authorization
- HTTP-only Cookie Authentication

---

## Customer Features

- Register & Login
- Browse Meals
- Place Orders
- Track Orders
- Manage Profile
- Submit Reviews

---

## Provider Features

- Create Provider Profile
- Add Meals
- Update Meals
- Delete Meals
- View Provider Orders
- Update Order Status

---

## Admin Features

- View All Users
- Activate / Suspend Users
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
├── app.ts
├── server.ts
│
├── config
├── constant
├── controllers
├── interfaces
├── lib
├── middleware
├── modules
├── prisma
├── routes
├── services
├── types
└── utils
```

---

# 🔐 Authentication

FoodHub uses **Better Auth** with secure session cookies.

Supported Authentication Methods

- Email & Password
- Google Login

Authorization is implemented using role-based middleware for:

- Customer
- Provider
- Admin

---

# 👥 User Roles

## Customer

- Browse Meals
- Place Orders
- View Order History
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
- Monitor Orders

---

# 🗄 Database

Database

- PostgreSQL (Neon)

ORM

- Prisma ORM

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

## Categories

| Method | Endpoint |
|---------|----------|
| GET | /api/v1/category |
| POST | /api/v1/category |
| DELETE | /api/v1/category/:id |

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

Create a `.env` file in the project root.

```env
PORT=

DATABASE_URL=

APP_URL=

BETTER_AUTH_URL=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=
```

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/rifat-54/Food-Hub-Server.git
```

Go to the project directory

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

Run Migrations

```bash
npx prisma migrate dev
```

Start Development Server

```bash
npm run dev
```

---

# 📦 Available Scripts

Start Development

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

Open Prisma Studio

```bash
npx prisma studio
```

---

# 🔒 Security

- Better Auth
- HTTP-only Cookies
- Session Authentication
- Role-based Authorization
- Input Validation
- CORS Configuration
- Secure Password Storage

---

# 🚀 Deployment

Backend

- Vercel

Database

- Neon PostgreSQL

---

# 👤 Demo Accounts

## Admin

Email

```
admin@gmail.com
```

Password

```
Admin@123
```

---

## Provider

Email

```
sarahkhan@gamail.com
```

Password

```
12345678
```

---

# 🎥 Demo Video

https://drive.google.com/file/d/1NA3vFvH1xlb8_gfW6MguV7ZgcFX68_ys/view?usp=sharing

---

# 👨‍💻 Author

**MD. Mashur Rahman Rifat**

GitHub

https://github.com/rifat-54

LinkedIn

https://www.linkedin.com/in/md-mashur-rahaman-rifat-28a61640b

Portfolio

https://portfollio-rifat-54.web.app/

---

# 📄 License

This project was developed as an academic assignment for educational purposes.