import { useState } from "react";
import Card from "../Card/Card";
import Titulo from "../Titulo/Titulo";
import styles from "./ListaPeliculas.module.css";
import Button from "../Button/Button";
import SortButton from "../../components/SortButton/SortButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import DeleteMovieButton from "../DeleteMovieButton/DeleteMovieButton";
import EditMovieButton from "../EditMovieButton.jsx/EditMovieButton";

const ListaPeliculas = ({ tipo, peliculas, sinFiltro, cambiarLista, set, onDelete, form, setUpdate}) => {
  const contadorGenero = peliculas.reduce((lista, pelicula) => {
    lista[pelicula.genre] = (lista[pelicula.genre] || 0) + 1;
    return lista;
  }, {});

  return (
    <div>
      <Titulo title={tipo} />
      <div className={styles.Filters}>
        <SortButton List={sinFiltro} Set={set} />
        <FilterButton Array={peliculas} Setfil={set} t={tipo} />
      </div>
      <div className={styles.generosContainer}>
        {Object.keys(contadorGenero).map((genero) => {
          return (
            <p key={genero}>
              {genero}: {contadorGenero[genero]}
            </p>
          );
        })}
      </div>
      <div className="movie-list">
        {peliculas.length > 0 ? (
          peliculas.map((pelicula, index) => {
            return (
              <div className="card" key={index}>
                <Card
                  title={pelicula.title}
                  image={pelicula.image}
                  director={pelicula.director}
                  year={pelicula.year}
                  genre={pelicula.genre}
                  rating={pelicula.rating}
                  type={pelicula.type}
                />
                <Button
                  texto={tipo === "No vistas" ? "Marcar" : "Quitar"}
                  onClick={() => cambiarLista(pelicula)}
                />
                <DeleteMovieButton
                  tipo = {tipo}
                  movie = {pelicula}
                  onDelete = {onDelete}/>
                <EditMovieButton
                  tipo = {tipo}
                  movie = {pelicula}
                  form={form}
                  setUpdate={setUpdate}/>
              </div>
            );
          })
        ) : (
          <p>No se encontraron elementos que coincidan...</p>
        )}
      </div>
    </div>
  );
};

export default ListaPeliculas;
