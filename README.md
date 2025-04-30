md
# Daily Idol – Your Personal K-pop Idol Photo Shrine

A desktop-first webapp that serves up fresh K-pop idol images every day by pulling from Pinterest boards and displaying them in a clean, poster-style feed.

---

## Project Info

**Repo:** https://github.com/darkoverlord31/daily-idol

---

## Getting Started

### Local Development

1. **Clone the repo**  
   ```bash
   git clone https://github.com/darkoverlord31/daily-idol.git
   cd daily-idol
   

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a file called `.env` in the project root with your keys:
   ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   PINTEREST_TOKEN=your_pinterest_access_token
   PINTEREST_BOARD_ID=your_pinterest_board_id
   ```
   *(Keep this file out of version control by ensuring `.env` is in your `.gitignore`.)*

4. **Start the dev server**  
   ```bash
   npm run dev
   ```
   Open your browser to http://localhost:5173 to see Daily Idol in action.

---

## Editing the Code

- **Your IDE:** Clone locally and work in VS Code, WebStorm, etc.  
- **GitHub Web Editor:** Edit files directly on GitHub by clicking the pencil icon.  
- **GitHub Codespaces:** Click **Code → Codespaces → Create new** to spin up an online dev environment instantly.

---

## Features

- **Daily Feed:** 1–3 new idol images per day from configured Pinterest boards  
- **Image Display:** Idol name, group, description, Pinterest source & date  
- **History Browsing:** Scroll or page through past days’ images in a neat grid  
- **Favorites:** Heart your top biases and view them in a separate section  
- **Admin Config:** Easily manage your Pinterest board IDs and idol mappings  

---

## Technical Overview

- **Frontend:** Vite + React + TypeScript  
- **Styling:** Tailwind CSS  
- **UI Components:** shadcn/ui  
- **Routing / State:** React Router + Context API  
- **Backend Functions:** Firebase Cloud Functions (scheduled Pinterest fetch)  
- **Database:** Firebase Firestore  
- **Hosting:** Firebase Hosting (or any static-site host)

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub.  
2. Import the repo into Vercel.  
3. In Vercel’s dashboard, add your environment variables (Firebase & Pinterest).  
4. Deploy — Vercel will build (`npm run build`) and publish automatically.

### Firebase Hosting

1. Install the CLI and log in:  
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. Initialize (if you haven’t already):  
   ```bash
   firebase init hosting
   ```
3. Build & deploy:  
   ```bash
   npm run build
   firebase deploy
   ```

*(You can also use Netlify, GitHub Pages, or your preferred host.)*

---

> **Chaewon Supremacy** — bias forever and forever perfect
