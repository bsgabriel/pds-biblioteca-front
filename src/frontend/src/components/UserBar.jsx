import React from "react";
import "./UserBar.css";

const UserBar = ({ user }) => {
  return (
    <div className="user-bar">
      <div className="user-details">
        <img src={user.image} alt={user.name} className="user-image" />
        <div className="infoUser">
          <div className="userName">{user.name}</div>
          <h3>Numero da matricula:</h3>
          <div className="userId">{user.id}</div>
        </div>
      </div>
      <div className="user-actions">
        <button className="logout-button">Trocar Usuário</button>
      </div>
    </div>
  );
};

export default UserBar;
