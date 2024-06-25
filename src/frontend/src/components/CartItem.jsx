import React from "react";

const CartItem = ({ book }) => {
  return (
    <tr className="cart-item">
      <td className="book-details">
        <img src={book.image} alt={book.title} />
        <div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </div>
      </td>
      <td className="quantity">
        <input type="number" value={book.quantity} />
      </td>
      <td className="weeks">
        <input type="number" value={book.weeks} readOnly />
      </td>
      <td>{book.dueDate}</td>
      <td className="remove-book">X</td>
    </tr>
  );
};

export default CartItem;
