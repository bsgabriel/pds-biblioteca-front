import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import UserBar from "../components/UserBar";
import UserInfo from "../components/UserInfo";
import "../styles/BookRental.css";

import userImage from "../assets/leoncio.jpeg";

const baseURL = "http://localhost:8080/book/";

const BookRental = () => {
  const { bookId } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  const user = {
    id: "123456",
    name: "João da Silva",
    phone: "(99) 99999 - 9999",
    email: "joao.silva@gmail.com",
    cep: "99999 - 999",
    address: "Rua do João, Nº 99",
    image: userImage,
  };
  // const defaultBooks = [
  //   {
  //     image: harryPotterImage,
  //     title: "Harry Potter e a Pedra Filosofal",
  //     author: "J. K. Rowling",
  //     quantity: 1,
  //     weeks: 4,
  //     dueDate: moment().add(4, "weeks").format("DD/MM/YYYY"),
  //   },
  //   {
  //     image: aneisImage,
  //     title: "O Senhor dos Anéis",
  //     author: "J. R. R. Tolkien",
  //     quantity: 1,
  //     weeks: 2,
  //     dueDate: moment().add(2, "weeks").format("DD/MM/YYYY"),
  //   },
  //   {
  //     image: bananaImage,
  //     title: "Diário de um Banana",
  //     author: "Jeff Kinney",
  //     quantity: 1,
  //     weeks: 1,
  //     dueDate: moment().add(1, "weeks").format("DD/MM/YYYY"),
  //   },
  // ];

  useEffect(() => {
    const fetchSelectedBook = async () => {
      try {
        const response = await axios.get(`${baseURL}${bookId}`);
        setSelectedBook(response.data);
      } catch (error) {
        console.error("Error fetching selected book:", error);
      }
    };

    if (bookId) {
      fetchSelectedBook();
    }
  }, [bookId]);

  useEffect(() => {
    if (selectedBook) {
      setBooks([selectedBook]);
    }
  }, [selectedBook]);

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
