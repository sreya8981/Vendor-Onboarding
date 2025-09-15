# Vendor Onboarding React Project

A professional multi-step **Vendor Onboarding Form** built with **React** — showcasing form validation, gamification elements, clean UI/UX design, and responsive layouts.

---

## Features

- Multi-step form with validation
- Avatar selection with badge unlocking
- Smooth transitions and animations
- Fully responsive design (desktop + mobile)
- Final summary and gamified dashboard

---

## Technologies Used

- React (Functional Components)
- JavaScript (ES6+)
- CSS (Custom + Animations)
- LocalStorage (for progress saving)
- Google Fonts (Poppins)

---

##  Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)
- A modern browser (Chrome, Firefox, Edge)

---

## Installation & Setup

1. **Clone or extract** the project:
   
   git clone https://github.com/sreya8981/Vendor-Onboarding.git 

2. Navigate to the project folder:
       cd vendor-onboarding-app
       
3. Install dependencies:
      npm install

4. Start the development server:
      npm start


5. Open your browser and go to:

http://localhost:3000

-----

##  How to Use the App 

1. Click "Get Started" on the landing page.

2. Proceed through each onboarding step:
   - Select an avatar
   - Enter your email
   - Choose number of employees
   - Specify transaction volume
   - Select business interests
   - Complete your profile
   
3. View a final summary of your details.

4. Proceed to the Dashboard to see badges and points earned.

5. Resetting Progress-
   On the final Dashboard screen, click the "Reset & Start Over" button to clear your data and begin again.

----

## Notes

- This is a frontend-only React app (no backend API).
- Progress is stored in localStorage during the session.
- Designed for modern browsers and mobile devices
- It's focused on gamification, UX, and React fundamentals.



## Folder Structure

src/
├── components/         # All React components (one per step)
├── styles.css          # Global CSS styles
├── App.js              # Root component with step logic
└── index.js            # Entry point

