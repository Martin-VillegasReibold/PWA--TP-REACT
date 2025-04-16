import React, { useState } from "react";
import Card from "../Card/Card";

const AscDescOrder = ({ array }) => {
  //const [MyArray, setMyArray] = useState([]);
  const [sortStatus, setSortStatus] = useState(true);

  {
    array.map((movie, index) => (
      <Card
        key={index}
        title={movie.title}
        image={movie.image}
        director={movie.director}
        year={movie.year}
        genre={movie.genre}
        rating={movie.rating}
        type={movie.type}
      />
    ));
  }

  const handleSort = () => {
    const data = array;
    if (sortStatus) {
      array = data.sort((a, b) => b.rating - a.rating); //.year .rating
      setSortStatus(!sortStatus);
    } else {
      array = data.sort((a, b) => a.rating - b.rating);
      setSortStatus(!sortStatus);
    }
  };

  return (
    <>
      <button onClick={handleSort}>ClickMe to Sort</button>
      {console.log(array)}
      
    </>
  );
};

export default AscDescOrder;
