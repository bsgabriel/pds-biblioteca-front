import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookRental from "./pages/BookRental";
import BooksPage from "./pages/BooksPage";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BooksPage />} />
        <Route path="/reserva" element={<BookRental />} />
        <Route path="/reserva/:bookId" element={<BookRental />} />
      </Routes>
    </Router>
  );
}

export default App;
