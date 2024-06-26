import React from "react";
import { CiSearch } from "react-icons/ci";
import estante from "../assets/teste.jpeg"; // Certifique-se de que este caminho está correto
import Layout from "../components/Layout";

import FeaturedBooks from "../components/FeaturedBooks";
import PopularGenres from "../components/PopularGenres";
import "../styles/Home.css";

const Home = () => {
  // const [books, setBooks] = useState([
  //   {
  //     id: 1,
  //     title: "Mock Book 1",
  //     author: "Author 1",
  //     publisher: "Publisher 1",
  //     year: 2021,
  //   },
  //   {
  //     id: 2,
  //     title: "Mock Book 2",
  //     author: "Author 2",
  //     publisher: "Publisher 2",
  //     year: 2022,
  //   },
  // ]);

  // const handleEditBook = (book) => {
  //   window.location.href = `/books?edit=${book.id}`;
  // };

  // const handleDeleteBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

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
            />
          </div>
        </div>
      </div>
      <div className="featured-section mt-8">
        <h1 className="flex text-4xl font-bold">
          Principais escolhas dos leitores
        </h1>
        <FeaturedBooks />
        {/* <BookList
          books={books}
          onEdit={handleEditBook}
          onDelete={handleDeleteBook}
        /> */}
      </div>
      <div>
        <h1 className="flex text-4xl font-bold">Generos em destaque</h1>

        <PopularGenres />
      </div>
    </Layout>
  );
};

export default Home;
