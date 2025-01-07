# Netflix Clone

A Netflix Clone web application built using **React**, **Vite**, and **Firebase**. These technologies were chosen for their modern development capabilities: React ensures a dynamic and responsive UI, Vite offers a fast and optimized development environment, and Firebase simplifies authentication and backend integration. This project replicates key features of Netflix's UI, including a home page with movie cards, a navbar, a footer, and user authentication using Firebase.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Installation and Setup](#Installation-and-Setup)
4. [Technologies Used](#technologies-used)
5. [Usage](#usage)
6. [Folder Structure Details](#folder-structure-details)
7. [Future Enhancements](#future-enhancements)

---

## Project Structure

```
public
src:
    assets
    components
         Footer:
               Footer.jsx
               Footer.css
         Navbar:
                Navbar.jsx
                Navbar.css        
         TitleCards:
                TitleCards.jsx
                TitleCards.css
     pages:
          Home:
              Home.jsx
              Home.css
          Login:
              Login.jsx
              Login.css  
          Player:
              Player.jsx
              Player.css  
     main.jsx
     App.jsx
     firebase.js
     index.css
index.html
eslint.config.js
package.json
package-lock.json
vite.config.js
```

---

## Features

- **Authentication:** Users can log in via Firebase Authentication, supporting email/password login and third-party providers like Google.
- **Responsive Design:** A fully responsive UI compatible with various devices.
- **Dynamic Content:** Displays dynamic movie cards fetched from a mock database or API.
- **Navigation:** Includes a functional navbar for seamless navigation.
- **Player:** Watch trailers or movies within a player component.

---

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adhnannp/netflix-clone.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd netflix-clone
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up Firebase:**

   - Create a Firebase project in the Firebase console.
   - Add a web app to the Firebase project.
   - Copy the Firebase configuration object and replace it in `src/firebase.js`.

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. Open the app in your browser:

   ```
   http://localhost:5173
   ```

---

## Technologies Used

- **React**: Frontend library for building UI components.
- **Vite**: Development environment for fast builds.
- **Firebase**: Backend-as-a-Service for authentication and database.
- **CSS**: Styling components.
- **ESLint**: Code linting and standardization.

---

## Usage

1. Run the app locally using the above installation steps.
2. Log in using your Firebase credentials.
3. Browse the home page for movie titles.
4. Click on any movie card to navigate to the player.

---

## Folder Structure Details

### `public`

Contains static assets, such as the favicon or static images. Examples include the app logo, manifest files, and other resources that are not processed by the build tool. These assets are typically used for branding or enhancing the user interface.

### `src/assets`

Stores shared assets like images and icons.

### `src/components`

Contains reusable UI components:

- **Footer**: Footer of the app, styled with `Footer.css`.
- **Navbar**: Navigation bar.
- **TitleCards**: Movie cards displayed on the home page.

### `src/pages`

Contains page-specific components:

- **Home**: Main landing page with a movie grid.
- **Login**: Authentication page for user login.
- **Player**: Page to watch selected movie trailers or videos.

### `src/firebase.js`

Contains Firebase configuration and initialization logic.

### `App.jsx`

Root component of the application, handles routing and global logic.

### `main.jsx`

Entry point of the React application.

### `vite.config.js`

Configuration file for Vite.

---

## Future Enhancements

- **Search Functionality:** Allow users to search for titles. This would improve user experience by enabling quicker access to desired content, especially in a large library of titles.
- **Improved Player:** Include subtitle support and playback speed controls.
- **Profile Management:** Allow users to create and manage profiles.
- **Recommendations:** Add personalized movie recommendations.

---

Feel free to contribute to this project by submitting issues or pull requests!

