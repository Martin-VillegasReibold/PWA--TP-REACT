import "./FilterButton.module.css";
import React, { useState } from "react";
import Button from "../Button/Button";

const FilterButton = ({ Array, Setfil }) => {
  const allgenre = ["Todo", ...new Set(Array.map((arreglo) => arreglo.genre))];
  const [genre, setGenre] = useState(allgenre);
  const alltype = [...new Set(Array.map((arreglo) => arreglo.type))];
  const [type, setType] = useState(alltype);
  const [data, setData] = useState(Array);
  const [save, setSave] = useState(Array.length);

  const filterCat = (category) => {
    if (category === "Todo") {
      Setfil(data);
      setSave(data.length);
      return;
    }
    const filteredData = data.filter(
      (card) => card.genre === category || card.type === category
    );
    Setfil(filteredData);
    setSave(filteredData.length);
  };

  return (
    <>
      <div>
        <div className="select_filter">
          {genre.map((category) => (
            <Button
              key={category}
              onClick={() => filterCat(category)}
              texto={category}
            />
          ))}

          {type.map((category) => (
            <Button
            key={category}
            onClick={() => filterCat(category)}
            texto={category}
          />
          ))}
          <h3>Listados: {save}</h3>
        </div>
      </div>
    </>
  );
};

export default FilterButton;
