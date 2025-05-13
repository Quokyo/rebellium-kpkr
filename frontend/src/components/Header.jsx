import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="header">
      <Link to="/" className="logo">REBELLIUM</Link>
      <nav>
        <Link to="/catalog" className={isActive("/catalog")}>Каталог</Link>
        <Link to="/cart" className={isActive("/cart")}>Корзина</Link>
        <Link to="/profile" className={isActive("/profile")}>Профиль</Link>
        {user?.role === "admin" && (
          <Link to="/admin" className={isActive("/admin")}>Админка</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
