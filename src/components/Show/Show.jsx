import Card from "../Card/Card";
import React, { useState } from "react";
import AscDescOrder from "../AscDescOrder/AscDescOrder";

const Show = ({ movies }) => {
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

  return (
    <div>
      <h1>Movies</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={handleSearchChange} //detecta cambio
        />
      </div>
     <AscDescOrder array={filteredMovies}/>
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
    </div>
  );
};

export default Show;
