import { useState } from "react";
import "./FormAdd.css";

const FormAdd = ({onAdd, setFormAdd}) => {
    const [form, setForm] = useState({
        image: "",
        title: "",
        director: "",
        year: "",
        genre: "",
        rating: "",
        type: "",
      });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmed = confirm('¿Desea agregar la Peli/Serie?');
        if(!confirmed) return;
        onAdd(form);
        setForm({
            image: "",
            title: "",
            director: "",
            year: "",
            genre: "",
            rating: "",
            type: "",
        });
        setFormAdd(false);
      };

    return (
        <form onSubmit={handleSubmit} className="contenedor">
            <div className="title"> <h1>Nueva Peli/Serie</h1></div>
            <input type="url" name="image" className="index" onChange={handleChange} value={form.image} placeholder="Ingrese URL imagen" required></input>
            <input name="title" className="index" onChange={handleChange} value={form.title} placeholder="Ingrese Titulo" required></input>
            <input name="director" className="index" onChange={handleChange} value={form.director} placeholder="Ingrese Director" required></input>
            <input type="number" name="year" min="1900" max="2025" className="index" onChange={handleChange} value={form.year} placeholder="Ingrese Año" required></input>
            <select name="genre" className="index" onChange={handleChange} value={form.genre} required>
                <option value="">Género</option>
                <option value="Acción">Acción</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Terror">Terror</option>
                <option value="Romance">Romance</option>
            </select>
            <input type="number" name="rating" min="1" max="5" className="index" onChange={handleChange} value={form.rating} placeholder="Ingrese Rating (1-5)" required></input>
            <select name="type" className="index" onChange={handleChange} value={form.type} required>
                <option value="Película">Película</option>
                <option value="Serie">Serie</option>
            </select>

            <button type="submit" className="AddButton"> Agregar </button>
        </form>
    )
}

export default FormAdd;