import React, { useState, useEffect } from "react";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Titulo from "../../components/Titulo/Titulo";

const Home = ({ noVistas, setNoVistas, vistas, setVistas }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value); //actualiza search
  };
  const cambiarLista = (pelicula) => {
    //console.log(pelicula)
    if (noVistas.includes(pelicula)) {
      const nuevasNoVistas = obtenerLocalStorage("No vistas", noVistas).filter(
        (p) => p.title !== pelicula.title
      );
      setNoVistas(nuevasNoVistas);
      guardarLocalStorage("No vistas", nuevasNoVistas);
      setVistas([...obtenerLocalStorage("Vistas", vistas), pelicula]);
      guardarLocalStorage("Vistas", [
        ...obtenerLocalStorage("Vistas", vistas),
        pelicula,
      ]);
    } else {
      const nuevasVistas = obtenerLocalStorage("Vistas", vistas).filter(
        (p) => p.title !== pelicula.title
      );
      setVistas(nuevasVistas);
      guardarLocalStorage("Vistas", nuevasVistas);
      setNoVistas([...obtenerLocalStorage("No vistas", noVistas), pelicula]);
      guardarLocalStorage("No vistas", [
        ...obtenerLocalStorage("No vistas", noVistas),
        pelicula,
      ]);
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

  const obtenerLocalStorage = (clave, fallback) => {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : fallback;
  };

  return (
    <div>
      <Titulo title={"Gestor de Peliculas y Series"} />
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
          sinFiltro={noVistas}
          cambiarLista={cambiarLista}
          set={setNoVistas}
        />
        <ListaPeliculas
          tipo="Vistas"
          peliculas={filteredVistas}
          sinFiltro={vistas}
          cambiarLista={cambiarLista}
          set={setVistas}
        />
      </div>
    </div>
  );
};

export default Home;
