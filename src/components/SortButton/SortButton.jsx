import React, { useState } from "react";
import Card from "../Card/Card";
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
      <button onClick={() => sorting("year")}>Sort by Year</button>
      <button onClick={() => sorting("rating")}>Sort by Rating</button>

      {console.log(List)}
    </>
  );
};

export default SortButton;
