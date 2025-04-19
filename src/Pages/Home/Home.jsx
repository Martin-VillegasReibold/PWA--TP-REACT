import React, { useState, useEffect } from "react";
import SortButton from "../../components/SortButton/SortButton";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import FilterButton from "../../components/FilterButton/FilterButton";
import Button from "../../components/Button/Button";

const Home = ({ noVistas, setNoVistas, vistas, setVistas }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value); //actualiza search
  };

  const cambiarLista = (pelicula) => {
    if(noVistas.includes(pelicula)){
      const nuevasNoVistas = noVistas.filter(p => p.title !== pelicula.title);
      setNoVistas(nuevasNoVistas);
      setVistas([...vistas, pelicula]);
    }else{
      const nuevasVistas = vistas.filter(p => p.title !== pelicula.title);
      setVistas(nuevasVistas);
      setNoVistas([...noVistas, pelicula]);
    }
  };

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
  };

  useEffect(() => {
    guardarLocalStorage("noVistas", noVistas);
  }, [noVistas]);

  useEffect(() => {
    guardarLocalStorage("vistas", vistas);
  }, [vistas]);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Nombre o Director..."
          value={search}
          onChange={handleSearchChange} //detecta cambio
        />
      </div>
      <div>
        <SortButton List={noVistas} Set={setNoVistas} />
        <FilterButton Array={noVistas} Setfil={setNoVistas} />
        <ListaPeliculas
          tipo="No vistas"
          peliculas={filteredNoVistas}
          cambiarLista={cambiarLista}
        />
        <SortButton List={vistas} Set={setVistas} />
        <FilterButton Array={vistas} Setfil={setVistas} />
        <ListaPeliculas
          tipo="Vistas"
          peliculas={filteredVistas}
          cambiarLista={cambiarLista}
        />
      </div>
    </div>
  );
};

export default Home;
