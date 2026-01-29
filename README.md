# Repair Shop Dashboard

A modern, responsive dashboard application for managing repair shop operations including call logs, appointments, and user settings.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animations and transitions
- **Highcharts** - Interactive charts
- **Lucide React** - Icon library

## Features

### Dashboard Overview
- Statistics cards displaying key metrics (total calls, resolved, pending, satisfaction rate)
- Interactive call trends chart with area spline visualization
- Recent activity feed
- Top repair requests breakdown

### Call Logs
- Filterable call list by date range, status, and outcome
- Detailed call view with customer information
- Call duration tracking and timestamps

### Appointments
- Appointment statistics overview
- Shareable booking link
- Paginated appointments table with status indicators
- Client and scheduling details

### Settings
- User profile management (view and edit modes)
- Profile image section
- Store information configuration

## Responsive Design

Fully responsive across all devices:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Sidebar, Header, DashboardLayout
│   ├── dashboard/       # Stats, Chart, Activity, RepairRequests
│   ├── callLogs/        # CallList, CallDetails
│   └── appointments/    # Stats, BookingLink, Table
├── pages/               # DashboardOverview, CallLogs, Appointments, Settings
└── main.jsx             # App entry point
```
