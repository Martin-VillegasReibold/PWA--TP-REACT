import React, { useState, useEffect } from "react";
import ListaPeliculas from "../../components/ListaPeliculas/ListaPeliculas";
import Titulo from "../../components/Titulo/Titulo";
import FormAdd from "../../components/FormAdd/FormAdd";
import FormEdit from "../../components/FormEdit/FormEdit";

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
  }
  //----------------------------------------------------------------------
  const [formAddMovie, setFormAddMovie] = useState(false);
  const [formUpdateMovie, setFormUpdateMovie] = useState(false);
  const [editMovie, setEditMovie] = useState("");
  const [typeEditMovie, setTypeEditMovie] = useState("");
  
  const addMovie = (movie) => {
    const nuevaLista = [...noVistas, { ...movie, id: Date.now()}];
    setNoVistas(nuevaLista);
    guardarLocalStorage("No vistas", nuevaLista);
  };

  const deleteMovie = (title, tipo) => {
    if(tipo === "Vistas"){
      const nuevasVistas = vistas.filter(movie => movie.title !== title);
      setVistas(nuevasVistas);
      guardarLocalStorage("Vistas", nuevasVistas);
    }
    if(tipo === "No vistas"){
      const nuevasNoVistas = noVistas.filter(movie => movie.title !==title);
      setNoVistas(nuevasNoVistas);
      guardarLocalStorage("No vistas", nuevasNoVistas);
    }
    
  };

  const updateMovie = (title, updatedData, tipo) => {
    if(tipo === "Vistas"){
      const nuevasVistas = vistas.map(movie => movie.title === title ? { ...movie, ...updatedData } : movie);
      setVistas(nuevasVistas);
      guardarLocalStorage("Vistas", nuevasVistas);
    }
    if(tipo === "No vistas"){
      const nuevasNoVistas = noVistas.map(movie => movie.title === title ? { ...movie, ...updatedData } : movie);
      setNoVistas(nuevasNoVistas);
      guardarLocalStorage("No vistas", nuevasNoVistas);
    }
  };

  const form = (tipo, movie) =>{
    setTypeEditMovie(tipo)
    setEditMovie(movie)
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
        <button className="AddButton" onClick={() =>setFormAddMovie(true)}>Agregar Peli/Serie</button>
        {formAddMovie && <FormAdd onAdd={addMovie} setFormAdd={setFormAddMovie}/>}
      </div>
      <div>
        <ListaPeliculas
          tipo="No vistas"
          peliculas={filteredNoVistas}
          sinFiltro={noVistas}
          cambiarLista={cambiarLista}
          set={setNoVistas}
          onDelete={deleteMovie}
          form={form}
          setUpdate={setFormUpdateMovie}
        />
        {formUpdateMovie && <FormEdit movie={editMovie} onUpdate={updateMovie} setFormUpdate={setFormUpdateMovie} tipo={typeEditMovie}/>}
        <ListaPeliculas
          tipo="Vistas"
          peliculas={filteredVistas}
          sinFiltro={vistas}
          cambiarLista={cambiarLista}
          set={setVistas}
          onDelete={deleteMovie}
          form={form}
          setUpdate={setFormUpdateMovie}
        />
        </div>
    </div>
  );
};

export default Home;
