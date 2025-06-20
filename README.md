# Discord Dashboard

A modern, responsive dashboard for managing a Discord-like community, built with Next.js, React, Tailwind CSS, and Heroicons. This project features a dashboard overview, member management, and mock data for demonstration.

## Features

- **Dashboard Overview**: View key server statistics (total members, online now, active roles, messages today) with visually appealing stat cards.
- **Member Management**:
  - List all members with avatars, names, emails, roles, and join dates.
  - Search, filter by role, and sort members.
  - Paginated member table for easy navigation.
  - Add new users with a modal form (demo only, uses mock data).
- **Navigation**: Responsive sidebar and top navigation bar for easy access to dashboard, members, messages, and roles.
- **Theme Support**: Toggle between light, dark, and system themes.
- **Mock Data**: All data is mock/demo data for easy testing and demonstration.

## Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Heroicons](https://heroicons.com/)
- TypeScript

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` — Main application code (pages, components, hooks, context)
- `app/components/` — Reusable UI components (NavBar, SideBar, ThemeManager, StatsCard, etc.)
- `app/members/` — Member management page and components
- `app/mockData/` — Mock data for dashboard stats, members, roles, and messages

## Customization

- To use real data, replace the mock data in `app/mockData/` with your API calls or database queries.
- Update styles and components as needed for your use case.

## License

This project is for educational/demo purposes. Feel free to use and modify it for your own learning or prototyping.
