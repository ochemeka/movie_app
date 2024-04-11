import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=a19804ff";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
       <h1>Melvin Movies Land</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// import  {useEffect, useState} from 'react';
// import './App.css';
// import MovieCard from './MovieCard';
// import  SearchIcon from './search.svg'


//  // Here is your key: a19804ff
//  const API_URL = 'https://www.omdbapi.com?apikey=a19804ff';


// //  const movie1 ={
// //     "Title": "Spiderman and Grandma",
// //     "Year": "2009",
// //     "imdbID": "tt1433184",
// //     "Type": "movie",
// //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// // }

// const App =() => {

//   const [movies, setMovies] = useState([]);

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data =   await response.json();

//     setMovies(data.Search);
//   }

//   useEffect(() => {
//     searchMovies('Spiderman');
//   }, []);

//   return (
   
//    <div className='app'>
//       <h1>Melvin Movies Land</h1>
//       <div className='search'>
//           <input
//            placeholder='Search for movies'
//            value="Superman"
//            onChange={() => {}}
//           />
//           <img 
//           src={SearchIcon}
//           alt='search'
//           onClick={() => {}}
//           />
//       </div>
//       {
//         movies?.length > 0
//         ?
//         (
//           <div className='container'>
//             {movies.map((movie) =>(
//               <MovieCard movie1={movie} />
//             ) )}
//           </div>
//         ) : (
//           <div className='empty'>
//            <h2>No movies found</h2>
//           </div>
//         )
        
//       }

      


//    </div>

//   );
// }

// export default App;
