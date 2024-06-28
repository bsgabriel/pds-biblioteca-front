import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../components/Cart";
import Layout from "../components/Layout";
import UserBar from "../components/UserBar";
import UserInfo from "../components/UserInfo";
import "../styles/BookRental.css";

import userImage from "../assets/leoncio.jpeg";

const baseURL = "http://localhost:8080/book/";
const baseURLReserva = "http://localhost:8080/booking";

const BookRental = () => {
  const { bookId } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [reservationDetails, setReservationDetails] = useState([]);

  const user = {
    id: "123456",
    name: "João da Silva",
    phone: "(99) 99999 - 9999",
    email: "joao.silva@gmail.com",
    cep: "99999 - 999",
    address: "Rua do João, Nº 99",
    image: userImage,
  };

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

  const handleBooking = async () => {
    try {
      for (let reservation of reservationDetails) {
        await axios.post(`${baseURLReserva}`, reservation);
      }
      alert("Reserva feita com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer a reserva:", error);
      alert("Erro ao fazer a reserva");
    }
  };

  const addReservationDetail = useCallback((detail) => {
    setReservationDetails((prevDetails) => [...prevDetails, detail]);
    console.log(reservationDetails);
  }, []);

  return (
    <Layout>
      <div className="book-rental">
        <UserBar user={user} />
        <div className="cart-user-info-container">
          <Cart books={books} addReservationDetail={addReservationDetail} />
          <UserInfo user={user} handleReservation={handleBooking} />
        </div>
      </div>
    </Layout>
  );
};

export default BookRental;
