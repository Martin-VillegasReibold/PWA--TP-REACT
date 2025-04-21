import React, { useState, useEffect } from "react";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";

const Home = ({ noVistas, setNoVistas, vistas, setVistas }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value); //actualiza search
  };

  const cambiarLista = (pelicula) => {
    //console.log(pelicula)
    if (noVistas.includes(pelicula)) {
      const nuevasNoVistas = noVistas.filter((p) => p.title !== pelicula.title);
      setNoVistas(nuevasNoVistas);
      setVistas([...vistas, pelicula]);
    } else {
      const nuevasVistas = vistas.filter((p) => p.title !== pelicula.title);
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

  /*

  const guardarLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
  };

  useEffect(() => {
    guardarLocalStorage("No vistas", noVistas);
  }, [noVistas]);

  useEffect(() => {
    guardarLocalStorage("Vistas", vistas);
  }, [vistas]);
*/
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
        <ListaPeliculas
          tipo="No vistas"
          peliculas={filteredNoVistas}
          cambiarLista={cambiarLista}
          set={setNoVistas}
        />
        <ListaPeliculas
          tipo="Vistas"
          peliculas={filteredVistas}
          cambiarLista={cambiarLista}
          set={setVistas}
        />
      </div>
    </div>
  );
};

export default Home;
