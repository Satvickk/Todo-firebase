# Todo Firebase

This project is a Todo application built using React, Vite, and Firebase. It uses modern front-end libraries and tools such as TailwindCSS, Radix UI, and TypeScript to provide a robust and maintainable codebase.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Linting the Code](#linting-the-code)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

git clone https://github.com/yourusername/todo-firebase.git
cd todo-firebase
npm install

# Running the Project
To run the project in development mode, use the following command:
npm run dev
This will start the Vite development server, and you can view the application in your browser at http://localhost:3000.

# Building the Project
To build the project for production, use the following command:

npm run build
This will create an optimized and minified build of the project in the dist directory.


# Linting the Code
To lint the code and ensure it adheres to the project's coding standards, use the following command:

npm run lint
This will run ESLint on the project's codebase.

# Project Structure
The project structure is as follows:

todo-firebase/
├── .env
├── .gitignore
├── index.html
├── package.json
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
├── tsconfig.json
└── vite.config.ts

# Environment Variables
The project uses environment variables to manage sensitive information and configuration settings. Create a .env file in the root of the project and add your environment variables. The variables must start with VITE_ to be exposed to the Vite application.
Example .env file:
VITE_API_KEY=your-api-key-here
VITE_API_URL=https://api.example.com

# Dependencies
@radix-ui/react-label: ^2.0.2
@radix-ui/react-slot: ^1.0.2
@radix-ui/react-tabs: ^1.0.4
class-variance-authority: ^0.7.0
clsx: ^2.1.1
firebase: ^10.12.2
lucide-react: ^0.390.0
react: ^18.2.0
react-dom: ^18.2.0
tailwind-merge: ^2.3.0
tailwindcss-animate: ^1.0.7

# Dev Dependencies
@types/node: ^20.14.2
@types/react: ^18.2.66
@types/react-dom: ^18.2.22
@typescript-eslint/eslint-plugin: ^7.2.0
@typescript-eslint/parser: ^7.2.0
@vitejs/plugin-react: ^4.2.1
autoprefixer: ^10.4.19
eslint: ^8.57.0
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.4.6
postcss: ^8.4.38
tailwindcss: ^3.4.4
typescript: ^5.2.2
vite: ^5.2.0

# License
This project is licensed under the MIT License.
