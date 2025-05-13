import React from "react";
import { useNavigate } from "react-router-dom";
import vinyls from "../data/vinyl.json";
import "../App.css";

const CartPage = () => {
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, id) => {
    const item = vinyls.find(v => v.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const handleCheckout = () => {
    const existing = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = [...existing, cart];
    localStorage.setItem("orders", JSON.stringify(newOrder));
    alert("Заказ оформлен!");
    localStorage.removeItem("cart");
    navigate("/catalog");
  };

  return (
    <div className="App">
      <h2>🛒 Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((id, index) => {
              const item = vinyls.find(v => v.id === id);
              return (
                <li key={index}>
                  {item.title} — ${item.price}
                </li>
              );
            })}
          </ul>
          <p><strong>Итого:</strong> ${total.toFixed(2)}</p>
          <button onClick={handleCheckout}>Оформить заказ</button>
        </>
      )}
      <br />
      <button onClick={() => navigate("/catalog")}>← Назад</button>
    </div>
  );
};

export default CartPage;
