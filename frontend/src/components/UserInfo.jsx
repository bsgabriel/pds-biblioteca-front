import React from "react";
import "../styles/BookRental.css";

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <h2>informações do usuário</h2>
      <h1>Quem está retirando?</h1>
      <form>
        <label>
          Nome Completo
          <input type="text" value={user.name} readOnly />
        </label>
        <label>
          Telefone
          <input type="text" value={user.phone} readOnly />
        </label>
        <label>
          Email
          <input type="text" value={user.email} readOnly />
        </label>
        <label>
          CEP
          <input type="text" value={user.cep} readOnly />
        </label>
        <label>
          Endereço
          <input type="text" value={user.address} readOnly />
        </label>
        <button type="submit" className="confirm-rental">
          Confirmar Aluguel
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
