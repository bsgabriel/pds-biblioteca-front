import React from "react";
import carro from "../assets/images (1).png";
import uninho from "../assets/uninho.jpeg";
import GenresCard from "./GenresCard";
import "./GenresCard.css";
import "./PopularGenres.css";

const popularGenres = [
  { image: uninho, genre: "Fantasia" },
  {
    image: carro,
    genre: "História, Sociologia",
  },
  // add more books as necessary
];

const PopularGenres = () => {
  return (
    <div className="popular-genres">
      {popularGenres.map((book, index) => (
        <GenresCard key={index} image={book.image} genre={book.genre} />
      ))}
    </div>
  );
};

export default PopularGenres;
