import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import Layout from "../components/Layout";

const baseURL = "http://localhost:8080/book";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");

  useEffect(() => {
    if (editId) {
      const bookToEdit = books.find((book) => book.id === parseInt(editId));
      setEditingBook(bookToEdit);
    } else {
      setEditingBook(null);
    }
  }, [editId, books]);

  const handleSaveBook = async (newBook) => {
    if (editingBook) {
      setBooks(
        books.map((book) => (book.id === editingBook.id ? newBook : book))
      );
    } else {
      try {
        const response = await axios.post(baseURL, newBook);
        setBooks([...books, response.data]);
      } catch (error) {
        console.error("Error saving book:", error);
      }
    }
    window.location.href = "/";
  };

  return (
    <Layout>
      <h1 className="flex ml-20 text-4xl font-bold ">
        {editingBook ? "Editar livro" : "Adicionar livro"}
      </h1>
      <BookForm book={editingBook} onSave={handleSaveBook} />
    </Layout>
  );
};

export default BooksPage;
