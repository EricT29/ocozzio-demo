# Ocozzio Frontend Demo

A Next.js + TypeScript demo showcasing a responsive contact page for Ocozzio.
This project features a clean, mobile-friendly layout, SCSS modules for styling, 
and a well-structured component-based architecture. Optimized for performance and 
accessibility, the contact page adapts seamlessly across desktop, tablet, and mobile devices.

## Tech Overview
* Framework: [Next.js](https://nextjs.org/)
* Language: [TypeScript](https://www.typescriptlang.org/)
* Styling: [SCSS](https://sass-lang.com/)


```
OCOZZIO-DEMO/
├── .next/                       # Next.js build artifacts (auto-generated)
├── node_modules/                # Dependencies (auto-generated)
├── public/
│   └── images/                  # Static assets (map pins, phone icons, etc.)
├── src/
│   └── app/
│       ├── components/
│       │   ├── ContactForm/     # Form component + SCSS
│       │   ├── ContactInfo/     # Info display + SCSS
│       │   ├── Footer/          # Site footer + SCSS
│       │   ├── Header/          # Site header + SCSS
│       │   └── ...
│       ├── globals.scss         # Global SCSS imports
│       ├── variables.scss       # SCSS variables
│       ├── layout.tsx           # Root layout with header & footer
│       ├── page.module.scss     # Scoped SCSS for home page
│       └── page.tsx             # Main page rendering content
├── .gitignore
├── eslint.config.mjs
├── package.json
├── tsconfig.json
└── README.md                    # This file
```


## How to Download and Run this project.

## Prerequisites

- [Git](https://git-scm.com/downloads) installed on your machine
- [Node.js](https://nodejs.org/) installed (recommended: latest LTS version)
- [Visual Studio Code](https://code.visualstudio.com/) installed

## Steps

### 1. Clone the Repository

Open a terminal or command prompt and navigate to the directory where you want to store the project. Run the following command to clone the repository:

**git clone https://github.com/EricT29/ocozzio-demo**

### 2. Navigate to the Project Folder

Change into the project directory:

**cd ocozzio-demo**

### 3. Install Dependencies

Run the following command to install the required dependencies:

**npm install**
or if using Yarn:

**yarn install**

### 4. Start the Development Server

Once the dependencies are installed, start the Next.js development server:

**npm run dev**

or if using Yarn:

**yarn dev**

By default, the application will be available at:
http://localhost:3000
You can open this link in your browser to view the project.

### 5. Open the Project in VS Code

Open Visual Studio Code in the project directory using:

**code .**

This will launch VS Code with the project files loaded.

## Additional Tips
To stop the server, press Ctrl + C in the terminal.
If you encounter permission issues, try running the commands with sudo on macOS/Linux.

**Author:** Eric T

**Date:** 2/28/2025