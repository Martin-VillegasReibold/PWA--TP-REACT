import "./EditMovieButton.css";
const EditMovieButton = ({tipo, movie, form, setUpdate}) => {

    return (
        <div>
        <button onClick={() => {
            form(tipo, movie)
            setUpdate(true)

          }}
          className="EditButton">
          Editar
        </button>
        </div>
    )
}

export default EditMovieButton;