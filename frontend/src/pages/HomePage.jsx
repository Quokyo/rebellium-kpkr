import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>🎶 REBELLIUM</h1>
      <p>Магазин виниловых пластинок. Ощути настоящую музыку.</p>
      <div className="buttons">
        <button onClick={() => navigate("/auth")}>Войти</button>
        <button onClick={() => navigate("/auth")}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default HomePage;
