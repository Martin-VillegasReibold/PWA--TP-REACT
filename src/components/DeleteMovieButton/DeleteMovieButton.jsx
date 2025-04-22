//import style from "./AddMovieButton.css";
const DeleteMovieButton = ({tipo, movie, onDelete}) => {

    return (
      <button onClick={() => {
        const confirmed = confirm('¿Desea Eliminar la Peli/Serie?');
        if(confirmed) onDelete(movie.title, tipo);
      }}
      className="text-red-600">
      Eliminar
    </button>
    )
}

export default DeleteMovieButton;