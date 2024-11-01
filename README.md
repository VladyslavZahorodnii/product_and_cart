
# First App

A Next.js project with FontAwesome for icons, designed as a simple watch shop application using the App Router.

## Table of Contents
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd first-app
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Run the following command to install project dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Server

To start the development server, use:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Production Build

To create an optimized production build:
```bash
npm run build
```
To serve the production build:
```bash
npm run start
```

## Scripts

- **`npm run dev`**: Runs the development server.
- **`npm run build`**: Creates an optimized production build.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Lints the project using ESLint.

## Dependencies

- **Next.js (14.0.3)**: React framework for server-rendered applications, using the App Router.
- **React (18)**: Library for building the user interface.
- **React-DOM (18)**: Provides DOM-specific methods for React.
- **FontAwesome**: For using icon sets, specifically free solid icons in this project.

### Development Dependencies
- **ESLint**: Tool for identifying and fixing code quality issues.
- **eslint-config-next**: Provides default linting configuration for Next.js projects.

## Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Edit files in the `app` directory using the new App Router structure. Changes will reflect in the browser automatically.
3. Run `npm run lint` before committing to ensure code quality.

## Project Structure

- **`app/`**: Contains the main routes and pages for the Next.js application, following the App Router structure.
- **`components/`**: Holds reusable UI components like headers, footers, and modals.
- **`public/`**: Public assets such as images and icons.
- **`store/`**: Holds the context and state management for the application, providing global state for features like the shopping cart.

---

## License
This project is licensed under the MIT License.
