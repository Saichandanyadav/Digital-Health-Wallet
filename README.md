# 🩺 Digital Health Wallet

## 📌 Project Overview

The **Digital Health Wallet** is a full-stack web application designed to securely manage, track, and share medical records and health vitals. It enables users to store test reports, visualize health vitals over time, and selectively share medical data with doctors, family members, or trusted individuals.

The application is built using **React + Vite + Tailwind CSS** on the frontend, **Node.js + Express** on the backend, and **SQLite** as the database.

> ⚠️ **Important Note:**
> The application is not deployed on cloud platforms like Render or Vercel because **SQLite is not suitable for persistent cloud deployment**. The project works flawlessly in a **local environment**. Migrating to **PostgreSQL or MySQL** would enable cloud deployment.

---

## 🎬 Live Demo

📺 **YouTube Demo Video:**
👉 [https://youtu.be/gX43htzfMCA](https://youtu.be/gX43htzfMCA)

---

## 🧩 Problem Statement

Design a **Digital Health Wallet** that allows users to access their health data **anytime and anywhere**, with the ability to track vitals over time and securely share medical records.

### Key Challenges Addressed:

* Centralized storage of medical reports
* Easy retrieval of reports based on vitals or dates
* Secure sharing with controlled access
* Visual tracking of health vitals over time

---

## 🛠️ Technology Stack

### Frontend

* **Framework:** ReactJS + Vite
* **Styling:** Tailwind CSS
* **State Management:** React Hooks + Context API

### Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** SQLite (local demo database)

### Other Tools

* **Authentication:** JWT-based authentication
* **File Storage:** Local file system (extendable to cloud storage)
* **Charts:** Used for vitals visualization

---

## 🎯 Functional Requirements

### 1️⃣ User Management

* User registration and login
* JWT-based authentication
* Role-based authorization
* User Roles:

  * **Owner:** Full access
  * **Viewer:** Read-only access

### 2️⃣ Health Reports Management

* Upload medical reports (PDF/Image)
* Store report metadata:

  * Report type (Blood Test, X-Ray, etc.)
  * Date
  * Associated vitals
* View and download uploaded reports

### 3️⃣ Vitals Tracking

* Store health vitals over time
* Visualize trends using charts
* Filter vitals by date range

### 4️⃣ Report Retrieval

* Search and filter reports by:

  * Date
  * Vital type
  * Report category

### 5️⃣ Access Control

* Share reports with:

  * Doctors
  * Family members
  * Friends
* Enforce read-only access for shared users

---

## 🧱 System Architecture

### Frontend (ReactJS)

* Authentication pages (Login/Register)
* Dashboards for reports and vitals
* API integration using services
* State management via Context API

### Backend (Node.js + Express)

* REST APIs for:

  * Authentication (`/auth/login`, `/auth/register`)
  * Reports (`/reports`)
  * Vitals (`/vitals`)
* JWT middleware for route protection
* Role-based access control

### Database (SQLite)

**Tables:**

* `users` → id, email, password, role
* `vitals` → id, user_id, name, value, date
* `reports` → id, user_id, title, type, date, file_path

**Relationships:**

* One-to-many between users and reports
* One-to-many between users and vitals

### File Storage

* Uploaded files stored locally
* Designed for future cloud storage integration

---

## 📐 Project Directory Structure

```
digital-health-wallet/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── reportController.js
│   │   └── vitalsController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Report.js
│   │   └── Vital.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── reports.js
│   │   └── vitals.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🔧 Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm start
```

📍 Backend runs on: `http://localhost:5000`

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

📍 Frontend runs on: `http://localhost:5173`

---

## 🔐 Security Considerations

* JWT-based API authentication
* Role-based access control
* Secure file upload handling
* Sensitive data stored securely in SQLite

---

## 📦 Project Deliverables

* Complete frontend and backend source code
* Local setup documentation
* Screen-recorded demo walkthrough
* Fully functional local application

---

## ❌ Why Deployment Is Limited

* SQLite does not support persistent cloud storage on platforms like Render.
* The application is optimized for **local execution**.
* Cloud deployment would require migration to:

  * PostgreSQL or
  * MySQL

---

## 👨‍💻 Developer Details

**Name:** Sai Chandan Gundaboina
**Role:** Full Stack Developer

🔗 **GitHub:** [https://github.com/Saichandanyadav](https://github.com/Saichandanyadav)

📧 **Email:** [saichandhanyadav2002@gmail.com](mailto:saichandhanyadav2002@gmail.com)

💼 **LinkedIn:** [https://linkedin.com/in/Saichandanyadav](https://linkedin.com/in/Saichandanyadav)
