# Election Monitoring System

A comprehensive web application for monitoring elections, ensuring fairness and transparency, preventing fraud, and encouraging civic engagement.

## Features

- **Role-Based Authentication**: Four distinct user roles with specific permissions
  - **Admin**: Manage system, monitor data, ensure security
  - **Citizen**: Track processes, report issues, engage in discussions
  - **Election Observer**: Monitor activities, report anomalies, provide insights
  - **Data Analyst**: Analyze data, generate reports, real-time updates

- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Protected Routes**: Role-based access control for dashboard pages

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── dashboards/
│   │   ├── AdminDashboard.jsx
│   │   ├── CitizenDashboard.jsx
│   │   ├── ObserverDashboard.jsx
│   │   └── AnalystDashboard.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Landing.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Usage

### Signing Up

1. Navigate to the Sign Up page
2. Fill in your details (name, email, password)
3. Select your role (Admin, Citizen, Election Observer, or Data Analyst)
4. Submit the form

### Logging In

1. Navigate to the Login page
2. Enter your email and password
3. You'll be redirected to your role-specific dashboard

### Role-Specific Features

- **Admin Dashboard**: System management, user administration, security monitoring
- **Citizen Dashboard**: Election tracking, issue reporting, civic discussions
- **Observer Dashboard**: Anomaly reporting, observation logging, fairness insights
- **Analyst Dashboard**: Data visualization, report generation, real-time analytics

## Notes

- User authentication is currently stored in localStorage (for demo purposes)
- In a production environment, implement proper backend authentication
- Passwords are stored in plain text (for demo only - use hashing in production)

## License

This project is open source and available for educational purposes.


