import React from "react";
import aneisImage from "../assets/aneis.jpeg";
import bananaImage from "../assets/banana.jpeg";
import harryPotterImage from "../assets/harry.jpeg";
import userImage from "../assets/leoncio.jpeg";
import "../styles/BookRental.css";
import Cart from "./Cart";
import Layout from "./Layout";
import UserBar from "./UserBar";
import UserInfo from "./UserInfo";

const BookRental = () => {
  const user = {
    id: "123456",
    name: "Jõao da Silva",
    phone: "(99) 99999 - 9999",
    email: "joao.silva@gmail.com",
    cep: "99999 - 999",
    address: "Rua do João, Nº 99",
    image: userImage,
  };

  const books = [
    {
      image: harryPotterImage,
      title: "Harry Potter e a Pedra Filosofal",
      author: "J. K. Rowling",
      quantity: 1,
      weeks: 4,
      dueDate: "25/07/2024",
    },
    {
      image: aneisImage,
      title: "O Senhor dos Anéis",
      author: "J. R. R. Tolkien",
      quantity: 1,
      weeks: 2,
      dueDate: "11/07/2024",
    },
    {
      image: bananaImage,
      title: "Diário de um Banana",
      author: "Jeff Kinney, Jeff Kinny",
      quantity: 1,
      weeks: 1,
      dueDate: "04/07/2024",
    },
  ];

  return (
    <Layout>
      <div className="book-rental">
        <UserBar user={user} />
        <div className="cart-user-info-container">
          <Cart books={books} />
          <UserInfo user={user} />
        </div>
      </div>
    </Layout>
  );
};

export default BookRental;
