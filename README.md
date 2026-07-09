# Women's Wellness Platform

A modern full-stack wellness web application designed to support women through different aspects of health and well-being. The platform provides personalized dashboards and specialized wellness tools covering menstrual health, fitness, mental wellness, breast health, and personal safety.

Users can register, log in, select their wellness interests, and access a personalized dashboard with modules tailored to their needs.

---

# Project Status

This project is a full-stack women's wellness platform that combines multiple health and wellness modules into a personalized user experience.

Users can:

* Register and log in securely
* Select wellness interests
* Access personalized dashboards
* Track health-related information
* Store wellness data securely
* Navigate seamlessly between multiple wellness modules
* Interact with a mental wellness chatbot for mood analysis

The application demonstrates both frontend and backend development using modern web technologies, including authentication, REST APIs, PostgreSQL, Prisma ORM, and persistent data storage.

---

# Project Overview

Women's health involves many interconnected aspects including reproductive health, physical fitness, mental well-being, breast health, nutrition, and personal safety.

This platform brings these services together into a single personalized wellness application where users can:

* Choose wellness interests
* Access a customized dashboard
* Use multiple specialized wellness modules
* Track health information
* View personalized wellness records
* Manage profile and account settings

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

The dashboard is dynamically generated based on the user's selected interests.

Dashboard includes:

* Interest-based wellness modules
* Active Modules Overview
* Wellness Score
* Tracking Streak
* Quick Navigation
* Persistent interests using Local Storage

---

# Wellness Modules

## Period & Fertility Tracking

* Cycle Tracking
* Period Logging
* Symptom Logging
* Cycle Calendar
* Cycle Progress Visualization
* Fertility Insights

---

## Fitness & Nutrition

* Workout Logging
* Workout Planner
* Meal Tracking
* Nutrition Monitoring
* Hydration Monitoring
* Wellness Insights

---

## Mental Wellness

* Mood Journaling
* Mood Tracking
* Mental Wellness Chatbot
* Automatic Mood Detection
* Mood History
* Stress Monitoring
* Wellness Resources

---

## Breast Health

* Self-Exam Tracking
* Symptom Logging
* Quick Health Logging
* Screening Reminders
* Breast Health Insights

---

## Safety Module

* Safety Check-ins
* Safety Status Tracking
* Emergency Support Features
* Personal Safety Resources
* Safety Awareness Tools

---

# Additional Pages

## Profile

Users can manage:

* Personal Information
* Health Overview
* Wellness Preferences
* Privacy Settings
* Security Settings

---

## Settings

Users can configure:

* Notifications
* Privacy Options
* Security Preferences
* Health Data Management
* Accessibility Settings

---

# User Flow

1. Welcome Screen

2. User Registration / Login

3. Interest Selection

4. Personalized Dashboard

5. Navigate to Wellness Modules

6. Track Wellness Information

7. Mental Wellness Chatbot

8. View Personalized History

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router

---

## Backend

* Node.js
* Express.js

---

## Database

* PostgreSQL
* Prisma ORM

---

## Authentication

* JWT Authentication

---

## API Communication

* REST APIs
* Axios

---

## Libraries

* React Icons
* Lucide React

---

## Development Tools

* Git
* GitHub
* VS Code
* Prisma Studio

---

# Database Models

The application stores user-specific wellness data using PostgreSQL and Prisma.

### User

Stores authentication details and user profile information.

### Cycle

Stores menstrual cycle records.

### SymptomLog

Stores period symptom entries.

### MoodLog

Stores mood journal entries and chatbot mood analysis.

### WorkoutLog

Stores workout records.

### MealLog

Stores meal records.

### BreastLog

Stores breast health logs and symptom records.

### SafetyLog

Stores safety check-ins and notes.

---

# Architecture

The application follows a full-stack client-server architecture.

```
React Frontend
        │
        ▼
React Components
        │
        ▼
Axios API Calls
        │
        ▼
Express REST APIs
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL Database
```

---

# Project Structure

```text
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── modules/
│   │   ├── period/
│   │   ├── fitness/
│   │   ├── mental/
│   │   ├── breast/
│   │   └── safety/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
backend/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
└── .env
```

---

# Installation

## Clone Repository

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

```
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

Generate Prisma Client:

```bash
npx prisma generate
```

Run Database Migrations:

```bash
npx prisma migrate dev
```

Start Backend Server:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

View database:

```bash
npx prisma studio
```

---

# Current Development Status

## Completed

* User Authentication
* User Registration & Login
* JWT Authentication
* Protected Routes
* Interest-Based Dashboard Personalization
* Local Storage Persistence
* REST API Integration
* Period Tracking Module
* Fitness & Nutrition Module
* Mental Wellness Module
* Mental Wellness Chatbot
* Breast Health Module
* Safety Module
* Profile Page
* Settings Page
* PostgreSQL Integration
* Prisma ORM
* CRUD Operations
* Axios API Integration
* Data Persistence

---

## Planned Improvements

* Responsive UI Improvements
* Dashboard Analytics
* Push Notifications
* Appointment Scheduling
* AI-powered Mental Health Assistant
* Mobile Optimization
* Cloud Deployment

---

# Future Enhancements

* AI-powered Wellness Assistant
* Advanced Analytics Dashboard
* Personalized Health Insights
* Push Notifications
* Appointment Scheduling
* Health Report Generation
* Wearable Device Integration
* Mobile Application
* Cloud Deployment

---

# Author

**Sanjana Choudhury**

---

# License

This project is developed for educational, academic, and demonstration purposes.
