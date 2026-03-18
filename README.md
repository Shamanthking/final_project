# Microservices Project (Node.js)

## 📌 Overview

This project demonstrates a microservices architecture using Node.js.
It follows a predefined structure and implements multiple services with basic APIs.

---

## 🧩 Services Implemented

* User Service
* Student Service
* Course Service
* College Service

Each service follows the same architecture pattern.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* Docker (optional)
* Microservices architecture

---

## 🚀 How to Run (Without Docker - Recommended)

### 1. Install dependencies

Go inside each service folder and run:

```
npm install
```

### 2. Run a service

Example:

```
cd services/user-service
npm run dev
```

Repeat for:

* student-service
* course-service
* college-service

---

## 🐳 Run with Docker (Optional)

Make sure Docker is installed and running.

```
npm run dev
```

---

## 📡 APIs

### 🔹 User Service

* GET /users → Get all users
* POST /users → Create user

### 🔹 Student Service

* GET /students
* POST /students

### 🔹 Course Service

* GET /courses
* POST /courses

### 🔹 College Service

* GET /colleges
* POST /colleges

---

## 🗂️ Data Storage

* No database used
* Data is stored in in-memory arrays

---

## 🎯 Goal of Project

* Understand microservices architecture
* Learn how to follow a predefined project structure
* Practice reading and implementing from README documentation

---

## 👨‍💻 Author

Shamanth
