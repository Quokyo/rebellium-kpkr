import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (username && password) {
        localStorage.setItem("user", JSON.stringify({
            username,
            role: username === "admin" ? "admin" : "user"
          }));
          
      navigate("/catalog");
    } else {
      alert("Введите логин и пароль");
    }
  };

  return (
    <div className="App">
      <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">{mode === "login" ? "Войти" : "Зарегистрироваться"}</button>
      </form>
      <p onClick={() => setMode(mode === "login" ? "register" : "login")} style={{ cursor: "pointer", marginTop: "1rem", color: "#444" }}>
        {mode === "login" ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войти"}
      </p>
    </div>
  );
};

export default AuthPage;
