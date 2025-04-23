//import style from "./AddMovieButton.css";
const EditMovieButton = ({tipo, movie, form, setUpdate}) => {

    return (
        <button onClick={() => {
            form(tipo, movie)
            setUpdate(true)

          }}
          className="text-red-600">
          Editar
        </button>
    )
}

export default EditMovieButton;