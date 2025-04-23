import { useState } from "react";
import "./FormEdit.css";

const FormEdit = ({movie, onUpdate, setFormUpdate, tipo}) => {
  const [edited, setEdited] = useState({...movie});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setEdited({...edited, [name]: value});
  };

  const handleSave = () => {
    onUpdate(movie.title, edited, tipo);
    setFormUpdate(false);
  };

  return (
    <form className="contenedor">
        <div className="title"> <h1>Editar "{edited.title}"</h1></div>
        <input type="url" name="image" className="index" onChange={handleChange} value={edited.image} placeholder="Ingrese URL imagen" required></input>
        <input name="title" className="index" onChange={handleChange} value={edited.title} placeholder="Ingrese Titulo" required></input>
        <input name="director" className="index" onChange={handleChange} value={edited.director} placeholder="Ingrese Director" required></input>
        <input type="number" name="year" min="1900" max="2025" className="index" onChange={handleChange} value={edited.year} placeholder="Ingrese Año" required></input>
        <select name="genre" className="index" onChange={handleChange} value={edited.genre} required>
            <option value="">Género</option>
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
        </select>
         <input type="number" name="rating" min="1" max="5" className="index" onChange={handleChange} value={edited.rating} placeholder="Ingrese Rating (1-5)" required></input>
        <select name="type" className="index" onChange={handleChange} value={edited.type} required>
            <option value="Película">Película</option>
            <option value="Serie">Serie</option>
        </select>
    
        <button
          onClick={() => {
            const confirmed = confirm('¿Guardar los cambios de la Peli/Serie?');
            if (confirmed) handleSave();
          }}
          className="UpdateButton"
        >
          Guardar
        </button>
    </form>


      /*
      <button
        onClick={() => {
            const action = movie.seen ? "marcar como NO vista" : "marcar como vista";
            const confirmed = confirm(`¿Querés ${action} "${movie.title}"?`);
            if (confirmed) onToggleSeen(movie.id);
        }}
        className="text-green-600"
        >
        {movie.seen ? "No vista" : "Vista"}
        </button>
        {isEditing ? (
          <button
          onClick={() => {
            const confirmed = confirm(`¿Guardar cambios a "${movie.title}"?`);
            if (confirmed) handleSave();
          }}
          className="text-blue-600"
        >
          Guardar
        </button>
        
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600">Editar</button>
        )}
      </div>
    </li>*/
  );
}

export default FormEdit;
