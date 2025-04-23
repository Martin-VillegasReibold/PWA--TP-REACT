import "./DeleteMovieButton.css";
const DeleteMovieButton = ({tipo, movie, onDelete}) => {

    return (
      <div>
      <button onClick={() => {
        const confirmed = confirm('¿Desea Eliminar la Peli/Serie?');
        if(confirmed) onDelete(movie.title, tipo);
      }}
      className="DeleteButton">
      Eliminar
    </button>
    </div>
    )
}

export default DeleteMovieButton;