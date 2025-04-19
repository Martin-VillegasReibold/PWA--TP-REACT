import React, { useState } from "react";
import "./SortButton.module.css";

const SortButton = ({ List, Set }) => {
  const [order, setOrder] = useState("asc");

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...List].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      Set(sorted);
      setOrder("dsc");
    }

    if (order === "dsc") {
      const sorted = [...List].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      Set(sorted);
      setOrder("asc");
    }
  };

  return (
    <>
      <button onClick={() => sorting("year")}>Año</button>
      <button onClick={() => sorting("rating")}>Rating</button>
    </>
  );
};

export default SortButton;
