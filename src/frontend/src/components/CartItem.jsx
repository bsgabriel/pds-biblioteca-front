import React from "react";

const CartItem = ({ book }) => {
  return (
    <tr className="cart-item">
      <td>
        <img src={book.image} alt={book.title} />
      </td>
      <td className="book-details">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
      </td>
      <td>
        <input type="number" value={book.quantity} readOnly />
      </td>
      <td>
        <input type="number" value={book.weeks} readOnly />
      </td>
      <td>{book.dueDate}</td>
      <td className="remove-book">X</td>
    </tr>
  );
};

export default CartItem;
