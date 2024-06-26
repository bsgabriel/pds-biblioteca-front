import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import estante from "../assets/teste.jpeg";
import BookList from "../components/BookList";
import Layout from "../components/Layout";
import "../styles/Home.css";

const baseURL = "http://localhost:8080/book";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(baseURL);
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleReserva = (bookId) => {
    navigate(`/reserva/${bookId}`);
  };

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`${baseURL}/${bookId}`);
      const updatedBooks = books.filter((book) => book.id !== bookId);
      setBooks(updatedBooks);
      setFilteredBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    navigate(`/books/${book.id}`);
  };

  return (
    <Layout>
      <div className="image-background relative">
        <img
          src={estante}
          alt="background"
          className="w-full h-96 object-cover opacity-25"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          Encontrar seu Livro
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 flex items-center">
          <div className="relative flex items-center w-96">
            <CiSearch className="absolute left-3 text-gray-600" />
            <input
              type="text"
              placeholder="Pesquisar livro..."
              className="pl-10 p-2 rounded-full border-solid border-2 border-gray-600 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="book-list-section">
        <BookList
          books={filteredBooks}
          onReserva={handleReserva}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </Layout>
  );
};

export default Home;
