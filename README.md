# Women's Wellness Platform

A modern **multi-module wellness web application** designed to support women through different stages of life.
The platform provides personalized dashboards and health tools covering menstrual health, pregnancy, mental wellness, safety, and more.

Users can select their **life stage and areas of interest**, and the system dynamically generates a dashboard with relevant wellness modules.

---

## Project Status

This project is currently a **UI-focused prototype** of a women's wellness platform.

The goal of this project is to design and demonstrate the **user interface, navigation flow, and module structure** for a comprehensive wellness application.

At this stage, the platform focuses on:

* Interface design
* User experience flow
* Module layout
* Navigation between wellness tools
* Dashboard personalization

Some features shown in the interface (such as tracking tools, analytics, reminders, or health insights) are **visual placeholders and not fully functional yet**.

Future development could include:

* Backend integration
* Database storage
* Real health tracking logic
* Authentication
* API integrations
* Data analytics
* Notifications and reminders

This project currently serves as a **front-end demonstration and design prototype** of a larger wellness system.

---

## Project Overview

Women's health involves many different aspects such as physical health, mental well-being, reproductive health, safety, and community support. This project aims to bring these tools together in a **single personalized wellness platform**.

The platform allows users to:

* Select their **life stage**
* Choose **wellness interests**
* Access a **customized dashboard**
* Use multiple **health tracking modules**
* Navigate easily between modules
* Manage their **profile and settings**

---

## Features

### Personalized Dashboard

Users receive a dashboard that displays only the modules relevant to their selected interests.

Dashboard features include:

* Active modules overview
* Wellness score
* Tracking streak
* Quick navigation to modules

---

### Wellness Modules

The platform includes several specialized wellness modules:

#### Period & Fertility Tracking

* Cycle tracking
* Period predictions
* Fertility insights
* Cycle progress visualization

#### Pregnancy Support

* Pregnancy progress tracking
* Kick counter
* Contraction timer
* Weekly baby development information
* Appointment reminders

#### Fitness & Nutrition

* Workout tracking
* Meal planning
* Hydration tracking
* Wellness insights

#### Mental Wellness

* Mood journaling
* Stress tracking
* Mindfulness resources
* Mental health support tools

#### Breast Health

* Self-exam guides
* Symptom tracking
* Screening reminders
* Health insights

#### Menopause Guidance

* Symptom tracking
* Lifestyle recommendations
* Sleep and hormone management guidance

#### Community Support

* Community feed
* Support groups
* Peer discussion spaces
* Moderated wellness discussions

#### Safety Module

* Emergency support features
* Safety tools and resources
* Personal safety awareness tools

---

## Additional Pages

### Profile Page

Users can manage personal information and preferences including:

* Name and account details
* Health overview
* Wellness preferences
* Privacy settings
* Security settings

---

### Settings Page

The settings panel allows users to manage platform preferences such as:

* Notifications
* Privacy options
* Security settings
* Health data management
* Accessibility options

---

## User Flow

1. **Welcome Screen**

   * Introduction to the platform

2. **Life Stage Selection**

   * Users choose their current life stage

3. **Interest Selection**

   * Users select health areas they want to track

4. **Dashboard**

   * Personalized modules appear based on selections

5. **Module Navigation**

   * Users access specific wellness tools

---

## Tech Stack

### Frontend

* React
* Vite
* TailwindCSS
* React Router

### Libraries

* react-icons
* lucide-react

### Development Tools

* Git
* GitHub
* VS Code

---

## Project Structure

```
frontend
 ├ src
 │  ├ components
 │  │   ├ Dashboard.jsx
 │  │   ├ Interests.jsx
 │  │   ├ LifeStage.jsx
 │  │   └ Welcome.jsx
 │
 │  ├ context
 │  │   └ InterestsContext.jsx
 │
 │  ├ modules
 │  │   ├ period
 │  │   ├ pregnancy
 │  │   ├ fitness
 │  │   ├ mental
 │  │   ├ breast
 │  │   ├ menopause
 │  │   ├ community
 │  │   └ safety
 │
 │  ├ pages
 │  │   ├ Profile.jsx
 │  │   └ Settings.jsx
 │
 │  ├ App.jsx
 │  ├ main.jsx
 │  └ index.css
```

---

## Installation

Clone the repository:

```
git clone https://github.com/your-username/your-repo-name.git
```

Navigate to the project folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

---

## Current Development Status

Completed:

* Wellness modules
* Dashboard navigation
* Profile page
* Settings page
* Routing system
* Safety module

Planned improvements:

* UI polishing
* Responsive design improvements
* Theme customization
* Improved module analytics
* Deployment

---

## Future Enhancements

Planned features include:

* Data visualization dashboards
* Personalized health insights
* Push notifications
* AI-assisted health suggestions
* Mobile optimization
* Deployment for public use

---

## Author

**Sanjana Choudhury**

---

## License

This project is intended for educational and demonstration purposes.
