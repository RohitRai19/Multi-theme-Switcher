# Multi-Theme Switcher App (React + TypeScript)

A responsive React application that supports multiple layout-based themes with persistence and routing.

## Tech Stack

- React + Vite + TypeScript
- Context API for theme management
- Tailwind CSS for styling
- React Router
- FakeStore API for products

## Folder Structure
 public/
── src/
│ ├── assets/ # Images, fonts, etc. (optional)
│ ├── components/ # UI components (Header, etc.)
│ ├── context/ # ThemeContext + useTheme hook
│ ├── pages/ # Page views (Home, About, Contact)
│ ├── theme/ # themeStyles.ts (class mappings per theme)
│ ├── App.tsx # Main app with layout switching
│ ├── main.tsx # ReactDOM root + ThemeProvider
│ ├── index.css # Tailwind imports and global styles
│ └── App.css # Optional extra styles
├── tailwind.config.js # Tailwind theme + safelist config
├── vite.config.ts # Vite config with Tailwind plugin
├── tsconfig.json # TypeScript config
├── package.json
└── README.md



##  Installation & Setup

###  Clone the Repository

```bash
git clone https://github.com/RohitRai19/Multi-theme-Switcher.git
cd Multi-theme-Switcher


# Install Dependencies

npm install

## Start the Dev Server

npm run dev

#Live Demo

 
 
Author
Name-: Rohit Rai
GitHub: @RohitRai19
Location: Gurgaon, India
Role: Frontend Developer
