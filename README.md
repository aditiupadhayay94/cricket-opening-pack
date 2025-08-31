Cricket Card Pack Opening
This is a frontend-only web application built for cricket fans, providing a fun and engaging card collection experience. The game allows users to open different 'packs' to reveal random cricket player cards and manage their growing collection.

The project is built with React, leveraging modern libraries like Framer Motion for animations and Zustand for state management.

Setup & Local Installation
To get a local copy of this project up and running, follow these steps.

Clone the repository:

git clone [https://github.com/aditiupadhayay94/cricket-opening-pack.git](https://github.com/aditiupadhayay94/cricket-opening-pack.git)
cd cricket-opening-pack

Install dependencies:

npm install

Run the application:

npm run dev

The application will now be running on https://cricket-opening-pack.vercel.app/

Project Logic (Frontend)
This application is designed to run entirely in the browser without a backend. All game logic, data management, and visual effects are handled on the frontend.

Card Data: Player card data, including names, ratings, and roles (BAT, BOWL, WK, ALLR), is stored in a JavaScript file. This serves as the static "database" for the game.

RNG (Random Selection) Logic: When a user clicks a pack, the application uses a random selection algorithm to choose a set of player cards from the master list. This logic is powered by Math.random(), which selects players based on a predefined probability, ensuring that certain players or card tiers are rarer than others.

State Management: Zustand is used for efficient and centralized state management. It handles key game data, such as the user's current coins and their complete card collection.

Data Persistence: All game progress, including the user's coins and collected cards, is managed in a local store. At the moment, this data is not persisted on page refresh to ensure a fresh game experience each time.

Key Features
Interactive Gameplay: An engaging and interactive experience with pack-opening mechanics.

Fluid Animations: Smooth and visually appealing animations for a polished user experience, powered by Framer Motion.

Dynamic UI: The interface dynamically updates to reflect the user's coin balance and newly acquired cards.

Efficient State Management: Zustand provides a lightweight and performant way to manage the game's state.

Technologies Used
React: The core library for building the user interface.

Vite: The build tool for a fast development experience.

Framer Motion: For all UI animations and transitions.

Zustand: A state management solution for handling game data.

Tailwind CSS: A utility-first CSS framework for styling.

Asset Credits
Confetti: The confetti effect is powered by the canvas-confetti library.

Audio: The pack-opening sound effect is sourced from a local open-pack.mp3 file.

Player Cards: Player card images are static assets stored locally in the project.

Future Improvements
Data Persistence: Implement Zustand's persist middleware to save user data to Local Storage, allowing progress to be retained across browser sessions.

More Animations: Add more complex animations and transitions using Framer Motion to enhance the user experience.

Sound Effects: Add sound effects for pack opening and other key actions to make the game more dynamic.

New Pack Categories: Introduce new pack tiers with different odds for collecting rare players.
