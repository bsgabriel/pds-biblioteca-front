import React from "react";
import CartItem from "./CartItem";

const Cart = ({ books }) => {
  return (
    <div className="cart">
      <h2>Carrinho de Livros</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Título do Livro</th>
            <th>Quantidade</th>
            <th>Semanas</th>
            <th>Devolução</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <CartItem key={index} book={book} />
          ))}
        </tbody>
      </table>
      <button className="continue-browsing">Continuar Navegando</button>
    </div>
  );
};

export default Cart;
