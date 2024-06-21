import React from "react";
import chevete from "../assets/chevete.jpeg";
import clio from "../assets/clio.jpeg";
import BookCard from "./BookCard";
import "./FeaturedBooks.css";

const featuredBooks = [
  {
    image: chevete,
    title: "Fantasia",
    genre: "Fantasia",
  },
  {
    image: clio,
    title: "Ficção Científica",
    genre: "Ficção Científica",
  },
  // add more books as necessary
];

const FeaturedBooks = () => {
  return (
    <div className="featured-books">
      {featuredBooks.map((book, index) => (
        <BookCard
          key={index}
          image={book.image}
          title={book.title}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default FeaturedBooks;
