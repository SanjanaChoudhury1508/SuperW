# Women's Wellness Platform

A modern full-stack wellness web application designed to support women through different aspects of health and well-being. The platform provides personalized dashboards and specialized wellness tools covering menstrual health, fitness, mental wellness, breast health, and personal safety.

Users can select their wellness interests, and the system dynamically generates a customized dashboard with relevant health modules.

---

# Project Status

This project is a full-stack women's wellness platform that combines multiple health and wellness modules into a personalized user experience.

Users can register, log in, select wellness interests, and access specialized health dashboards tailored to their needs. The platform integrates frontend and backend technologies to provide secure authentication, personalized experiences, and persistent health data storage.

Current capabilities include:

* User registration and authentication
* Personalized dashboard generation
* Interest-based module selection
* Secure API integration
* PostgreSQL database storage
* Prisma ORM data management
* Protected routes and session management
* User-specific health and wellness tracking

The project demonstrates both frontend and backend development, including database persistence, API integration, authentication, and modular application design.

---

# Project Overview

Women's health involves many different aspects including reproductive health, physical fitness, mental well-being, breast health, and personal safety.

This project brings these services together into a single personalized wellness platform where users can:

* Choose wellness interests
* Access a customized dashboard
* Use specialized wellness modules
* Track health-related information
* Navigate seamlessly between modules
* Manage profile and settings

---

# Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Session Management

---

## Personalized Dashboard

Users receive a dashboard customized according to their selected interests.

Dashboard features include:

* Active Modules Overview
* Wellness Score
* Tracking Streak
* Quick Navigation to Modules

---

## Wellness Modules

### Period & Fertility Tracking

* Cycle Tracking
* Period Logging
* Symptom Tracking
* Cycle Calendar
* Fertility Insights

### Fitness & Nutrition

* Workout Logging
* Meal Tracking
* Hydration Monitoring
* Wellness Insights

### Mental Wellness

* Mood Journaling
* Mood Tracking
* Stress Monitoring
* Wellness Resources

### Breast Health

* Self-Exam Tracking
* Symptom Logging
* Screening Reminders
* Health Insights

### Safety Module

* Safety Check-ins
* Emergency Support Features
* Personal Safety Resources
* Safety Awareness Tools

---

# Additional Pages

## Profile Page

Users can manage personal information and preferences including:

* Account Information
* Health Overview
* Wellness Preferences
* Privacy Settings
* Security Settings

## Settings Page

The settings panel allows users to manage platform preferences such as:

* Notifications
* Privacy Options
* Security Settings
* Health Data Management
* Accessibility Preferences

---

# User Flow

1. Welcome Screen
2. User Registration / Login
3. Interest Selection
4. Personalized Dashboard
5. Wellness Module Navigation
6. Health Data Tracking

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router

## Backend

* Node.js
* Express.js

## Database

* PostgreSQL
* Prisma ORM

## Authentication

* JWT Authentication

## Libraries

* Axios
* React Icons
* Lucide React

## Development Tools

* Git
* GitHub
* VS Code
* Prisma Studio

---

# Database Models

The application stores user-specific wellness data using PostgreSQL and Prisma.

### User

Stores user profile and authentication information.

### Cycle

Stores menstrual cycle records.

### SymptomLog

Stores cycle-related symptoms.

### MoodLog

Stores mood journal entries.

### WorkoutLog

Stores workout records.

### MealLog

Stores nutrition and meal records.

### BreastLog

Stores breast health logs and symptom records.

### SafetyLog

Stores safety check-ins and related notes.

---

# Project Structure

```text
frontend/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Interests.jsx
│   │   ├── Welcome.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   └── InterestsContext.jsx
│   │
│   ├── modules/
│   │   ├── period/
│   │   ├── fitness/
│   │   ├── mental/
│   │   ├── breast/
│   │   └── safety/
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Profile.jsx
│   │   └── Settings.jsx
│   │
│   ├── api/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
backend/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── app.js
│   └── server.js
│
└── .env
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/SanjanaChoudhury1508/SuperW.git
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

npm install
```

Configure environment variables:

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start backend server:

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

# Current Development Status

## Completed

* Authentication System
* User Registration & Login
* JWT Authentication
* Protected Routes
* Interest-Based Personalization
* Dashboard Navigation
* Period Tracking Module
* Fitness & Nutrition Module
* Mental Wellness Module
* Breast Health Module
* Safety Module
* Profile Page
* Settings Page
* PostgreSQL Integration
* Prisma ORM
* CRUD APIs
* Data Persistence

---

## Planned Improvements

* UI Polishing
* Responsive Design Enhancements
* Advanced Analytics
* Notifications & Reminders
* Health Insights Dashboard
* Deployment
* Mobile Optimization

---

# Future Enhancements

* Data Visualization Charts
* Personalized Health Insights
* Push Notifications
* AI-Assisted Wellness Suggestions
* Appointment Scheduling
* Health Report Generation
* Cloud Deployment

---

# Author

**Sanjana Choudhury**

---

# License

This project is developed for educational, academic, and demonstration purposes.
