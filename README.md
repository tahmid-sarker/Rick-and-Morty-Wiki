# Rick and Morty Wiki

Rick and Morty Wiki is a React-based web project that lets users explore characters, episodes, and locations from the Rick and Morty universe. The project features detailed character pages, and intuitive navigation for an engaging experience.

## Features

- **Browse Characters**: View all characters with images and basic info.
- **Character Details**: Detailed info including status, species, gender, origin, last known location, and episodes.
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts.

## Tech Stack

- **React**: Frontend library for UI development.
- **React Router**: For declarative routing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Component library for pre-designed components.
- **Swiper**: For creating responsive sliders.
- **React Icons**: For vector icons.
- **Firebase**: For hosting and deployment.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tahmid-sarker/Rick-and-Morty-Wiki.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Rick-and-Morty-Wiki
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser to view the project.

## How It Works

- Browse through characters on the main Cast page.
- Click on any character card to view detailed information, including their status, species, gender, origin, location, and episode appearances.
- Explore locations and episodes with interactive and responsive sliders.
- Navigate through different items using arrow controls.

### Routing

| Route               | Description                                    |
| ------------------- | ---------------------------------------------- |
| `/`                 | Home page with Hero, Cast, Locations, Episodes |
| `/cast`             | List of all characters                         |
| `/cast-details/:id` | Individual character details page              |
| `/*`                | Custom 404 error page                          |

## Project Structure

   ```
   src/
   ├── assets/
   │   └── images/              # Backgrounds, logos, icons
   ├── components/
   │   └── Home/
   │       ├── Hero.jsx
   │       ├── Episodes.jsx
   │       ├── Locations.jsx
   │       └── MeetTheCast.jsx
   ├── context/
   │   ├── DataContext.jsx      # Context setup
   │   └── DataProvider.jsx     # Data fetching and provider logic
   ├── pages/
   │   ├── Home.jsx
   │   ├── Cast.jsx
   │   ├── CastDetails.jsx
   │   └── Error.jsx
   ├── router/
   │   └── Router.jsx           # App routing logic
   ├── index.css
   ├── main.jsx
   └── index.html
   ```

## Credits

This project was developed by [Md. Tahmid Sarker Mahi](https://tahmid-sarker.github.io).