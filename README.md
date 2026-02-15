# Smart Student Schedule 📅

A modern, highly customizable web application for tracking university schedules. Designed to replace boring static tables with an interactive, themeable, and mobile-friendly dashboard.

## ✨ Features

- **Smart Filtering**: Automatically displays the current, next, or remaining lessons based on the time of day.
- **Dynamic Lesson Types**: Distinct logic for single lessons, double lessons, and practice sessions via specialized JavaScript classes.
- **Heavy Customization**: Multiple UI themes including `Glassmorphism`, `Matrix`, `Dark`, and `Gold/Black`.
- **Time Tracking**: Built-in timers to show how much time is left before or during a class.
- **Weekend & Break Awareness**: Specialized components to handle non-academic time gracefully.

## 🛠 Tech Stack

- **Frontend**: React.js

- **Styling**: CSS Modules & Global Theme context

- **State & Logic**: Custom Hooks (`useTheme`, `useSettingsOption`), OOP (Class-based data modeling)

## 🎨 Themes

The app supports a variety of visual styles to suit any mood

## 📖 Architecture Overview

The project follows a clean, component-based structure:

- `src/classes/`: Defines the data models (`Lesson`, `Practice`, `DoubleLesson`). This ensures type safety and consistent data structure across the app.
- `src/components/`: Atomic design approach with separate styles and logic for each UI element (Header, Settings, Lesson cards).
- `src/customHooks/`: Encapsulated logic for theme switching and version control.
- `src/utils/`: Helper functions for date-time calculations and lesson filtering.

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/khe4oyan/schedule.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
npm start
```
