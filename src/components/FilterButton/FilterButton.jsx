import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./FilterButton.module.css";

const FilterButton = ({ Array, Setfil, t }) => {
  const allgenre = [...new Set(Array.map((arreglo) => arreglo.genre))];
  const [genre, setGenre] = useState("");
  const alltype = [...new Set(Array.map((arreglo) => arreglo.type))];
  const [type, setType] = useState("");

  const [filters, setFilters] = useState({
    genre: "",
    type: "",
  });

  const obtenerLocalStorage = (clave, fallback) => {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : fallback;
  };

  const filteredArray = Array.filter(
    (prod) =>
      prod.genre.includes(filters.genre) && prod.type.includes(filters.type)
  );

  const makeFilter = (property, newFilterValue) => () => {
    setFilters({
      ...filters,
      [property]: newFilterValue,
    });

    if (newFilterValue === "") {
      Setfil(obtenerLocalStorage(t, Array));
    } else {
      Setfil(filteredArray);
    }
  };

  useEffect(() => {
  if (filters.genre === "" && filters.type === "") {
    Setfil(obtenerLocalStorage(t, Array));
  } else {
    const filteredArray = Array.filter(
      (prod) =>
        prod.genre.includes(filters.genre) && prod.type.includes(filters.type)
    );
    Setfil(filteredArray);
  }
}, [filters]);

  return (
    <>
      <div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Tipo</option>
          {alltype.map((option, i) => {
            return (
              <option value={option.value} key={i}>
                {option}
              </option>
            );
          })}
        </select>
        <Button texto={"Aplicar"} onClick={makeFilter("type", type)} />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Genero</option>
          {allgenre.map((option, i) => {
            return (
              <option value={option.value} key={i}>
                {option}
              </option>
            );
          })}
        </select>
        <Button texto={"Aplicar"} onClick={makeFilter("genre", genre)} />
      </div>
    </>
  );
};

export default FilterButton;
