import "./FilterButton.module.css";
import React, { useState } from "react";
const FilterButton = ({ Array, Setfil }) => {
  const allgenre = ["All", ...new Set(Array.map((arreglo) => arreglo.genre))];
  const [genre, setGenre] = useState(allgenre);
  const alltype = [...new Set(Array.map((arreglo) => arreglo.type))];
  const [type, setType] = useState(alltype);
  const [data, setData] = useState(Array);

  const filterCat = (category) => {
    if (category === "All") {
      Setfil(data);
      return;
    }
    const filteredData = data.filter(
      (card) => card.genre === category || card.type === category
    );
    Setfil(filteredData);
  };

  return (
    <>
      <div>
        <div className="select_filter">
          {genre.map((category) => (
            <button
              type="button"
              onClick={() => filterCat(category)}
              key={category}
            >
              {category}
            </button>
          ))}

          {type.map((category) => (
            <button
              type="button"
              onClick={() => filterCat(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterButton;
