import moment from "moment";
import React, { useEffect, useState } from "react";

const CartItem = ({ book, addReservationDetail }) => {
  const [quantity, setQuantity] = useState(1);
  const [weeks, setWeeks] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleWeeksChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setWeeks(value);
    }
  };

  useEffect(() => {
    const bookingDate = moment().format("YYYY-MM-DD");
    const returnDate = moment().add(weeks, "weeks").format("YYYY-MM-DD");

    addReservationDetail({
      bookId: book.id,
      clientId: "123456", // Este valor deve ser dinâmico baseado no usuário logado
      bookingDate,
      returnDate,
    });
  }, [weeks, book.id, addReservationDetail]);

  return (
    <tr className="cart-item">
      <td className="book-details">
        <img src={book.imageBook} alt={book.title} />
        <div>
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </div>
      </td>
      <td className="quantity">
        <input
          type="number"
          defaultValue={quantity}
          onChange={(e) => handleQuantityChange(e)}
        />
      </td>
      <td className="weeks">
        <input
          type="number"
          defaultValue={weeks}
          onChange={(e) => handleWeeksChange(e)}
        />
      </td>
      <td>{moment().add(weeks, "weeks").format("DD/MM/YYYY")}</td>
      <td className="remove-book">X</td>
    </tr>
  );
};

export default CartItem;
