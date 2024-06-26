import React from "react";
import "../styles/GenresCard.css";

const GenreCard = ({ image, genre }) => {
  return (
    <div className="genre-card">
      <img src={image} alt={genre} />
      <p>{genre}</p>
    </div>
  );
};

export default GenreCard;
