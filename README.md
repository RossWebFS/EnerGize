# EnerGize

Workout Tracker App is a React-based application designed to help users track their workouts and monitor progress effectively. It allows users to mark exercises as completed, view statistics like total calories burned and workout duration, and analyze workout completion status.

## Features

Workout Tracking: Mark exercises as completed.

Progress Monitoring:

Calculate total calories burned.

Track total workout duration.

Workout Status:

Identify workouts with incomplete exercises.

Count workouts with all exercises completed.

State Management: Manage workout state and user progress efficiently using Redux.

User authentication.
Workout history and analytics.

Personalized workout recommendations.

## Project Structure

The application consists of the following main components:

Redux Store: Centralized state management for workouts, finished exercises, and statistics.

Reducer:

Tracks finished exercises.

Calculates total calories and minutes for completed exercises.

Counts incomplete and fully completed workouts.

Components: UI components to display workout data and interact with the app.

## How It Works

Marking Exercises:

Users can mark individual exercises as completed.

The app updates the finished state with the workout ID and exercise index.

Calculations:

Total calories burned and total minutes are calculated dynamically based on completed exercises.

Fully completed and incomplete workouts are counted for tracking progress.

State Updates:

Redux manages the state and triggers updates to UI components when actions are dispatched.

## Installation

Clone the repository:
```bash
git clone https://github.com/your-repo/workout-tracker.git
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
## Scripts
```bash
npm start: Starts the development server.

npm run build: Builds the app for production.

npm test: Runs tests.
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature additions or bug fixes.