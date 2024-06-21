import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./BookCard.css";

const BookCard = ({ image, title, genre }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{genre}</p>
      <span className="arrow">
        <IoIosArrowForward />
      </span>
    </div>
  );
};

export default BookCard;
