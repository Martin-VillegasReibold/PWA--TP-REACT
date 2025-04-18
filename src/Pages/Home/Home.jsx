import Card from "../../components/Card/Card";
import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";
import SortButton from "../../components/SortButton/SortButton";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";

const Home = ({
  movies,
  setMovies,
  noVistas,
  setNoVistas,
  vistas,
  setVistas,
}) => {
  const backup = movies;

  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value); //actualiza search
  };

  //includes() determinar si una matriz incluye un determinado elemento, boolean

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNoVistas = noVistas.filter(
    (noVistas) =>
      noVistas.title.toLowerCase().includes(search.toLowerCase()) ||
      noVistas.director.toLowerCase().includes(search.toLowerCase())
  );

  const filteredVistas = vistas.filter(
    (vistas) =>
      vistas.title.toLowerCase().includes(search.toLowerCase()) ||
      vistas.director.toLowerCase().includes(search.toLowerCase())
  );

  const guardarLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
  }

  useEffect(() => {
    guardarLocalStorage("noVistas", noVistas);
  }, [noVistas]);

  useEffect(() => {
    guardarLocalStorage("vistas", vistas);
  }, [vistas]);

  return (
    <div>
      <Titulo title="Movies" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={handleSearchChange} //detecta cambio
        />
      </div>
      <div>
        <SortButton List={movies} Set={setMovies} />
      </div>
      <div className="movie-list">
        {filteredMovies.length > 0 ? ( //verifica si el arreglo de busqueda esta vacio
          filteredMovies.map(
            //sin filtro es movies.map
            (movie, index) => (
              <Card
                key={index}
                title={movie.title}
                image={movie.image}
                director={movie.director}
                year={movie.year}
                genre={movie.genre}
                rating={movie.rating}
                type={movie.type}
              />
            )
          )
        ) : (
          <p>No movies found...</p>
        )}
      </div>
      <div>
        <ListaPeliculas
          tipo="No vistas"
          peliculas={filteredNoVistas} //aca en un futuro voy a modificar las movies en 2 (NoVistas y Vistas)
        />
        <ListaPeliculas
          tipo="Vistas"
          peliculas={filteredVistas} //aca en un futuro voy a modificar las movies en 2 (NoVistas y Vistas)
        />
      </div>
    </div>
  );
};

export default Home;
