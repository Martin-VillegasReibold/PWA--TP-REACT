import "./Card.css";
import Button from "../Button/Button";

const Card = ({ image, title, director, year, genre, rating, type }) => {
  return (
    <>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title"> {title}</h2>
        <h3 className="card-data"> {director}</h3>
        <h3 className="card-data"> {year}</h3>
        <h3 className="card-data"> {genre}</h3>
        <h3 className="card-data"> {rating}</h3>
        <h3 className="card-data"> {type}</h3>
      </div>
    </>
  );
};

export default Card;
