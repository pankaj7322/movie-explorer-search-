# 🎬 Movie Explorer

A modern React application that allows users to search and explore movies with detailed information. Built with React, Vite, and React Router, this project provides a smooth user experience for discovering movies.

## 📋 Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Components](#components)

## ✨ Features

- **🔍 Movie Search**: Search for movies by title using the OMDB API
- **📱 Responsive Design**: Clean, dark-themed UI that works on all devices
- **🎭 Movie Cards**: Display movie posters, titles, and release years
- **📖 Detailed View**: Click on any movie to see comprehensive details
- **⚡ Fast Performance**: Built with Vite for fast build times and HMR
- **🗺️ Client-side Routing**: Smooth navigation using React Router v7

## 📸 Screenshots

### Home Page with Search
[![Movie Explorer Home Screenshot](./screenshots/home-page.png)](./screenshots/home-page.png)

The home page features:
- Movie Explorer navbar with logo
- Search bar to query movies by title
- Grid layout displaying movie cards with posters
- Default search results for "Avengers"

### Movie Detail Page
[![Movie Detail Screenshot](./screenshots/movie-detail.png)](./screenshots/movie-detail.png)

The detail page shows:
- Movie title and poster
- Comprehensive movie information
- Back navigation to home page

## 📁 Project Structure

```
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Individual movie card component
│   │   ├── MovieList.jsx       # Container for movie cards
│   │   └── Navbar.jsx          # Navigation bar
│   ├── pages/
│   │   ├── Home.jsx            # Home page with search
│   │   └── movieDetail.jsx     # Movie detail page
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Styling
│   ├── main.jsx                # Entry point
│   └── assets/
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React** (v19.2.4) - UI library
- **React Router DOM** (v7.13.0) - Client-side routing
- **Vite** (v7.2.4) - Build tool and dev server
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **OMDB API** - Movie data source
- **ESLint** - Code linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/`

## 🚀 Usage

### Searching for Movies
1. Navigate to the home page
2. Enter a movie title in the search box
3. Click the search button or press Enter
4. Browse through the search results

### Viewing Movie Details
1. Click the "Details" button on any movie card
2. View comprehensive information about the movie
3. Click the back button or home link to return to the search results

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production-ready build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🌐 API Integration

This project uses the **OMDB API** (Open Movie Database) for movie data.

### API Endpoints Used

1. **Search Movies**
   ```
   http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=SEARCH_QUERY
   ```

2. **Get Movie Details**
   ```
   http://www.omdbapi.com/?apikey=YOUR_API_KEY&i=IMDB_ID
   ```

### Note
The current API key is included for development purposes. For production, use your own API key from [OMDB API](http://www.omdbapi.com/).

## 🧩 Components

### MovieList.jsx
Displays a grid of movie cards. Maps through the movies array and renders MovieCard components. Shows "No Movies Found" message if search returns no results.

### MovieCard.jsx
Individual movie card showing:
- Movie poster image
- Movie title
- Release year
- "Details" link to view full information

### Navbar.jsx
Navigation bar with:
- Movie Explorer logo
- Home link

### Home.jsx
Home page with:
- Search form for movie queries
- Integration with OMDB API
- Loading state handling
- MovieList component to display results

### movieDetail.jsx
Detailed movie view showing:
- Full movie poster
- Title and comprehensive details
- Loaded via API based on IMDB ID from URL params

## 🎨 Styling

The application features a dark theme with:
- Dark background (#111)
- Light text for contrast
- Movie cards with subtle background (#222)
- Responsive flexbox layout
- Smooth card design with border-radius

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn package manager
- Internet connection (for OMDB API calls)

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a React practice project.

---

**Happy exploring! 🍿**
