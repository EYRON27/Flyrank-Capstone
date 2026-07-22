# SyncStudy AI Next.js Capstone Skeleton 🚀

This repository contains the Next.js App Router Capstone project skeleton (`flyrank-capstone`) built with TypeScript, Tailwind CSS (v4), and Lucide Icons.

It has been structured following professional routing standards and utilizes React Server Components by default.

---

## 🛠️ Tech Stack & Layout Details
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS (v4) with custom Glassmorphism variables
- **Icons**: Lucide React
- **Language**: TypeScript (Type-safe compilation enabled)

---

## 📂 Project Routing Structure
All internal pages share a responsive sidebar layout:
- `/` - **Landing Page**: Public hero section introducing SyncStudy AI's features.
- `/dashboard` - **Workspace Dashboard**: Active rooms summary, focus stats, and updates.
- `/tasks` - **Tasks Board**: Project items and an interactive Pomodoro Focus Timer.
- `/study-rooms` - **Study Rooms**: Directory of active voice/chat rooms.
- `/notes` - **Notes Viewport**: Markdown notes browser and reader.
- `/settings` - **Workspace Settings**: Input fields to customize profile data.
- `/health-check` - **API Health Check**: A dynamic server-rendered page that fetches user diagnostic data from a live mockup gateway on every request.

---

## 🚀 How to Setup and Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Verify Build Output**:
   ```bash
   npm run build
   ```

---

## ☁️ How to Deploy on Vercel

1. **Initialize Git & Push to GitHub**:
   - Create a brand new repository on your GitHub account called `flyrank-capstone`.
   - Run the following in your `flyrank-capstone` folder terminal:
     ```bash
     git add .
     git commit -m "feat: scaffold next.js capstone skeleton with routes and health-check"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/flyrank-capstone.git
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com/new).
   - Import your newly pushed `flyrank-capstone` repository.
   - Click **Deploy**! Vercel will automatically parse the Next.js setup and give you a live production link.
   - Any new code pushed to the `main` branch will automatically trigger a Vercel preview deployment.
