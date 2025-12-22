# Digital Health Wallet

## **Project Overview**

The **Digital Health Wallet** is a web application that allows users to manage and share their medical records and health vitals securely. Users can upload test reports, track their vitals over time, and grant selective access to family members, doctors, or friends.

The project is developed using **React + Vite + Tailwind CSS** for frontend, **Node.js + Express** for backend, and **SQLite** as the database.

> ⚠️ **Note:** Deployment on platforms like Render or Vercel is currently limited because SQLite is not fully compatible with cloud deployment. Hence, the project works perfectly in a local environment.

---

## 🧩 Problem Statement

Design a Health Wallet that is accessible to a person anywhere, anytime. The Health Wallet should have the ability to show a person’s vitals over a period of time.

* Users can upload test reports via web/mobile/WhatsApp.
* Users can retrieve reports based on vitals, date, etc.
* Users can grant access to select reports to family members, doctors, or friends.

---

## 🛠️ Technology Stack

### Frontend

* **Framework:** ReactJS + Vite
* **Styling:** Tailwind CSS
* **State Management:** React hooks + Context API

### Backend

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** SQLite (local storage for demo)

### Others

* **File Storage:** Local folder (can be extended to cloud storage)
* **Authentication:** JWT-based token authentication

---

## 🎯 Functional Requirements

### 1. User Management

* Register and login users
* JWT-based authentication and role-based authorization
* Roles: **Owner** (full access), **Viewer** (read-only access)

### 2. Health Reports

* Upload medical reports (PDF/Image)
* Store metadata:

  * Report type (Blood Test, X-Ray, etc.)
  * Date
  * Associated vitals (BP, Sugar, Heart Rate, etc.)
* View and download uploaded reports

### 3. Vitals Tracking

* Store and display vitals over time
* Visualize trends using charts/graphs
* Filter vitals by date range

### 4. Report Retrieval

* Search and filter reports by:

  * Date
  * Vital type
  * Report category

### 5. Access Control

* Share reports with doctors, family, or friends
* Define read-only access for shared users

---

## 🧱 System Architecture

### Frontend (ReactJS)

* UI Components for login, registration, reports, and vitals
* API integration with backend endpoints
* State management via Context API and React hooks

### Backend (Node.js + Express)

* REST API endpoints for:

  * Authentication (`/auth/login`, `/auth/register`)
  * Reports (`/reports`)
  * Vitals (`/vitals`)
* Middleware for JWT verification and role-based access
* SQLite database for storing user, reports, and vitals data

### Database (SQLite)

* Tables:

  * `users` (id, email, password, role)
  * `vitals` (id, user_id, name, value, date)
  * `reports` (id, user_id, title, type, date, file_path)
* Relationships: `users` → `vitals`, `users` → `reports`

### File Storage

* Uploaded reports are stored in a local folder (can migrate to cloud storage in future)

---

## 📐 Directory Structure

### Root Directory

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

### Backend

1. Navigate to backend:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   npm start
   ```
4. Server will run on `http://localhost:5000`

### Frontend

1. Navigate to frontend:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Access frontend on `http://localhost:5173` (or Vite assigned port)

---

## 🔐 Security Considerations

* JWT token verification for API endpoints
* Role-based access control (Owner / Viewer)
* Secure file uploads with validation
* Sensitive user data is stored in SQLite securely

---

## 🎬 Demo / Screen Recording

* [YouTube Demo Video](https://www.youtube.com/watch?v=YOUR_VIDEO_LINK)

---

## 📦 Deliverables

1. Source code (frontend + backend)
2. Setup instructions (this README)
3. Screen recording walkthrough
4. Functional application locally

---

## ✅ Why Deployment is Limited

* SQLite is not fully compatible with cloud deployment platforms like Render.
* The project runs perfectly in **local environment**, but cloud deployment would require switching to **PostgreSQL / MySQL** for full functionality.

---

## 👨‍💻 Developer Details

**Name:** Sai Chandan Gundaboina
**Role:** Full Stack Developer
**GitHub:** [https://github.com/Saichandanyadav](https://github.com/Saichandanyadav)
**Email:** [saichandhanyadav2002@gmail](mailto:saichandhanyadav2002@gmail.com)
**LinkedIn:** [https://linkedin.com/in/Saichandanyadav](https://linkedin.com/in/Saichandanyadav)

