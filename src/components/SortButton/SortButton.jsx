import React, { useState } from "react";
import "./SortButton.module.css";
import Button from "../Button/Button";

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
      <Button
        onClick={() => sorting("year")}
        texto="Año"
      />
      <Button
        onClick={() => sorting("rating")}
        texto="Rating"
      />

    </>
  );
};

export default SortButton;
