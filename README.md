# 🚀 UrNxtMove - Data-Driven Career Mapping

**UrNxtMove** is a premium career guidance platform designed specifically for students completing their 10th grade. It eliminates the anxiety of choosing the wrong academic path by providing data-driven trajectory simulations, interactive roadmaps, and personalized career diagnostics.

## ✨ Core Features

- **🧠 Diagnostic Career Pulse Check**: A specialized assessment that evaluates analytical, creative, and systematic thinking patterns.
- **🤖 AI-Powered Evaluation**: Matches student profiles against historical success rates across major academic streams.
- **🗺️ Interactive Roadmaps**: Detailed, multi-year progression plans for Inter (MPC, BiPC, CEC, HEC), Diploma (Polycet), ITI, and Vocational courses.
- **💰 Trajectory Simulation**: Projects potential career growth, salary ranges, and upcoming roles based on regional industry trends.
- **🎓 College Registry**: Database of institutions, admission requirements, and placement records.
- **👤 Personalized Dashboard**: Track saved streams, quiz results, and customized career milestones.
- **📱 Fully Responsive Design**: Optimized for mobile, tablet, and desktop viewports with adaptive grid layouts.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router & Turbopack)
- **Frontend**: React 19, Lucide React (Icons), Vanilla CSS (Custom Design System)
- **Database**: [Prisma](https://www.prisma.io/) (ORM) with SQLite
- **Styling**: Premium Glassmorphic UI with theme synchronization and global CSS variables.
- **Runtime**: Node.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dti-project.git
   cd dti-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your database URL:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Database Initialization**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📁 Project Structure

```text
├── prisma/               # Database schema and seed data
├── public/               # Optimized static assets
├── src/
│   ├── app/              # Next.js App Router routes & pages
│   ├── components/       # Reusable UI components (MentorChat, DashboardGrid, etc.)
│   ├── data/             # Static roadmap and career intelligence data
│   ├── lib/              # Prisma client and utility functions
│   └── styles/           # Global design system (globals.css)
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## 🏗️ Development Workflow

- **Branching**: Use feature-based branches (e.g., `feature/career-quiz`).
- **Styling**: Adhere to the established CSS variable system in `globals.css` for consistency. 
- **Responsiveness**: Use `dashboard-grid` and `profile-grid` classes for consistent adaptive behavior.
- **Prisma**: After modifying `schema.prisma`, run `npx prisma migrate dev` to update your local database.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by the UrNxtMove Team.