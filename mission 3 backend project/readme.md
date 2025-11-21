# 🎓 University Management System – Backend

**Role-Based Authentication & Management API (Admin | Student | Faculty)**  
Built with **Node.js**, **Express**, **TypeScript**, **Mongoose**, **Zod**, and **Winston Logging**

---

## 📌 Overview

This project is a **comprehensive University Management System backend**, supporting three major roles:

- **Admin**
- **Faculty**
- **Student**

The system includes secure authentication, role-based access control, user management, academic management, payment flows, and more.  
It follows industry standards with clean architecture, DTO validation using **Zod**, structured logging using **Winston**, and a fully modular API design.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- Login / Logout
- Refresh Token
- Change Password
- Forgot / Reset Password
- Force Logout (Admin)
- Role-based Access Control
- Permission Assignment System

### 👨‍🎓 Student Functionalities

- Manage & update profile (limited fields)
- Enroll in semesters & offered courses
- Tuition fee payment (Full / Partial)
- View transaction history
- Class routines
- Notice board & events
- View results (Full / Semester-wise)
- Teacher evaluations

### 👨‍🏫 Faculty Functionalities

- Manage & update profile
- Manage student grades
- Access academic & personal information
- Manage lecture resources

### 👨‍💼 Admin Functionalities

- Manage user accounts
  - Block / Unblock
  - Change Password
  - Force Logout
- Manage academic operations:
  - Semesters
  - Offered courses
  - Sections
  - Faculty
  - Students
  - Departments
  - Buildings & Rooms
  - Payments
  - Permissions
  - Activity logs

### 🎓 Academic Management

- Academic Semesters
- Academic Faculties
- Academic Departments (with population)
- Pagination, Sorting & Filtering

---

## 🏗️ Tech Stack

| Technology                      | Purpose                           |
| ------------------------------- | --------------------------------- |
| **Node.js / Express**           | Backend Framework                 |
| **TypeScript**                  | Strong typing & maintainable code |
| **MongoDB + Mongoose**          | Database ORM                      |
| **Zod**                         | Request validation                |
| **Winston + Daily Rotate File** | Logging                           |
| **dotenv**                      | Environment variables             |
| **ESLint + Prettier + Husky**   | Code quality & formatting         |

---

## 📂 Project Structure

```
src/
├── app/
│ ├── modules/
│ ├── middlewares/
│ ├── utils/
│ ├── errors/
│ ├── config/
│ └── routes/
├── server.ts
├── app.ts
└── ...

```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/mission-3-backend-project.git
cd mission-3-backend-project
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Create .env file

```
PORT=5000
DATABASE_URL=your-mongodb-url
JWT_SECRET=your-secret
JWT_EXPIRES_IN=1d
REFRESH_TOKEN_SECRET=your-refresh-secret
REFRESH_TOKEN_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
NODE_ENV=development

```

### 4️⃣ Run the project in development

```
npm run dev
```

### 5️⃣ Build for production

```
npm run build
```

---

## 🧪 Validation with Zod

All request bodies and query parameters are validated using Zod to ensure data integrity.

## 📝 Logging

The project uses **Winston** along with **Daily Rotate File** to maintain structured and reliable logging.  
It supports:

- **Error logging**
- **Request logging**
- **Daily log file rotation**
- **Separate logs for console and file outputs**

## 🔐 Security Implementations

The project includes several security features:

- **Bcrypt password hashing**
- **JWT Access & Refresh tokens**
- **Optional HTTP-only cookies**
- **Role-Based Route Protection**
- **Permission-based resource restrictions**

---

## 🤝 Contributing

Follow these steps to contribute:

1. **Fork** the repository
2. **Create** a new feature branch
3. **Commit** your changes
4. **Open** a Pull Request
