import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ({ books }) => {
  const navigate = useNavigate();

  const handleContinueBrowsing = () => {
    navigate("/");
  };

  return (
    <div className="cart">
      <h2>Carrinho de Livros</h2>
      <table className="cart-table">
        <thead className="cart-header">
          <tr>
            <th>Título do Livro</th>
            <th>Quantidade</th>
            <th>Semanas</th>
            <th>Devolução</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(books) &&
            books.map((book, index) => <CartItem key={index} book={book} />)}
        </tbody>
      </table>
      <button className="continue-browsing" onClick={handleContinueBrowsing}>
        <IoIosArrowBack className="mr-2" />
        Continuar Navegando
      </button>
    </div>
  );
};

export default Cart;
