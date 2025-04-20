# Daily Idol - Your Personal K-pop Idol Photo Shrine

A desktop-first web application that serves as your daily K-pop idol photo shrine, pulling images from Pinterest boards and displaying them in a clean, poster-style feed.

## Project info

**URL**: https://lovable.dev/projects/cb59b02e-f23f-499b-a30d-dfc3585c20ad

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cb59b02e-f23f-499b-a30d-dfc3585c20ad) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Features

- **Daily Feed**: Displays 1-3 new idol images per day from configured Pinterest boards
- **Image Display**: Shows idol name, group name, pin description, Pinterest source, and date pulled
- **History Browsing**: Browse past days' images in a clean grid layout
- **Favorites**: Save your favorite idol images to revisit later
- **Admin Configuration**: Manage Pinterest board mappings and application settings

## Technical Overview

This project is built with:

- Vite
- TypeScript
- React
- React Router for navigation
- shadcn-ui for UI components
- Tailwind CSS for styling
- Context API for state management

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cb59b02e-f23f-499b-a30d-dfc3585c20ad) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
