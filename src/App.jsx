import Home from "./Pages/Home/Home";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Bad Boys: Ride or Die",
      image:
        "https://i.pinimg.com/736x/a7/cc/8a/a7cc8ab06f3eadcf6a3c00c5638c04cc.jpg",
      director: "Adil El Arbi, Bilall Fallah",
      year: 2024,
      genre: "Comedia",
      rating: 4,
      type: "Pelicula",
    },
    {
      title: "Aladdin",
      image:
        "https://i.pinimg.com/736x/4b/cf/d1/4bcfd1857162183dca0e558cf766b93d.jpg",
      director: "Guy Ritchie",
      year: 2022,
      genre: "Romance",
      rating: 2,
      type: "Pelicula",
    },
    {
      title: "John Wick 3",
      image:
        "https://i.pinimg.com/736x/28/76/ac/2876acd89f1c7e7b10a7bd0638e99221.jpg",
      director: "Chad Stahelski",
      year: 2020,
      genre: "Accion",
      rating: 5,
      type: "Pelicula",
    },
    {
      title: "Brightburn: el hijo de la oscuridad",
      image:
        "https://i.pinimg.com/736x/7e/2e/35/7e2e3564d1cdf31c566a788c111a33dd.jpg",
      director: "David Yarovesky",
      year: 2020,
      genre: "Accion",
      rating: 3,
      type: "Pelicula",
    },
  ]);

  const[noVistas, setNoVistas] = useState([
    {
      title: "Bad Boys: Ride or Die",
      image:
        "https://i.pinimg.com/736x/a7/cc/8a/a7cc8ab06f3eadcf6a3c00c5638c04cc.jpg",
      director: "Adil El Arbi, Bilall Fallah",
      year: 2024,
      genre: "Comedia",
      rating: 4,
      type: "Pelicula",
    },
    {
      title: "Aladdin",
      image:
        "https://i.pinimg.com/736x/4b/cf/d1/4bcfd1857162183dca0e558cf766b93d.jpg",
      director: "Guy Ritchie",
      year: 2022,
      genre: "Romance",
      rating: 2,
      type: "Pelicula",
    },
  ])

  const[vistas, setVistas] = useState([
    {
      title: "John Wick 3",
      image:
        "https://i.pinimg.com/736x/28/76/ac/2876acd89f1c7e7b10a7bd0638e99221.jpg",
      director: "Chad Stahelski",
      year: 2020,
      genre: "Accion",
      rating: 5,
      type: "Pelicula",
    },
    {
      title: "Brightburn: el hijo de la oscuridad",
      image:
        "https://i.pinimg.com/736x/7e/2e/35/7e2e3564d1cdf31c566a788c111a33dd.jpg",
      director: "David Yarovesky",
      year: 2020,
      genre: "Accion",
      rating: 3,
      type: "Pelicula",
    },
  ])

  return (
    <>
      <Home movies={movies} setMovies={setMovies} noVistas={noVistas} setNoVistas={setNoVistas} vistas={vistas} setVistas={setVistas} />
    </>
  );
}

export default App;
