import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/auth");
  };

  if (!user) return <p>Пользователь не авторизован</p>;

  return (
    <div className="App">
      <h2>👤 Профиль</h2>
      <p><strong>Имя:</strong> {user.username}</p>
      <p><strong>Роль:</strong> {user.role || "user"}</p>

      <h3>🧾 История заказов:</h3>
      {orders.length === 0 ? (
        <p>Нет оформленных заказов</p>
      ) : (
        <ul>
          {orders.map((o, i) => (
            <li key={i}>
              {o.map(id => (
                <span key={id}>{id} </span>
              ))}
            </li>
          ))}
        </ul>
      )}

      <br />
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default ProfilePage;
