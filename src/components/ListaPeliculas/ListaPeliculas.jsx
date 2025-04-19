import Card from "../Card/Card";
import Titulo from "../Titulo/Titulo";
import styles from "./ListaPeliculas.module.css";
import Button from "../Button/Button";

const ListaPeliculas = ({ tipo, peliculas, cambiarLista }) => {
  const contadorGenero = peliculas.reduce((lista, pelicula) => {
    lista[pelicula.genre] = (lista[pelicula.genre] || 0) + 1;
    return lista;
  }, {});
  return (
    <div>
      <Titulo title={tipo} />
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
                  texto={tipo === "No vistas" ? "Marcar como vista" : "Marcar como no vista"}
                  onClick={() => cambiarLista(pelicula)}
                />
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
