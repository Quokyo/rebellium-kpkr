import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [records, setRecords] = useState([]);
  const [newItem, setNewItem] = useState({
    label_number: "",
    company: "",
    release_date: "",
    retail_price: "",
    stock_remaining: ""
  });

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/auth");
    } else {
      axios.get("http://localhost:3001/api/records").then((res) => setRecords(res.data));
    }
  }, [navigate, user]);
  

  const handleAdd = () => {
    axios.post("http://localhost:3001/api/records", {
      ...newItem,
      wholesale_price: 0,
      sold_last_year: 0,
      sold_this_year: 0
    }).then((res) => {
      setRecords([...records, res.data]);
      setNewItem({
        label_number: "",
        company: "",
        release_date: "",
        retail_price: "",
        stock_remaining: ""
      });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/records/${id}`).then(() => {
      setRecords(records.filter(r => r.id !== id));
    });
  };

  return (
    <div className="App">
      <h2>Админ-панель</h2>

      <div>
        <input placeholder="ID / Label" value={newItem.label_number}
          onChange={(e) => setNewItem({ ...newItem, label_number: e.target.value })} />
        <input placeholder="Компания / Артист" value={newItem.company}
          onChange={(e) => setNewItem({ ...newItem, company: e.target.value })} />
        <input type="date" placeholder="Дата" value={newItem.release_date}
          onChange={(e) => setNewItem({ ...newItem, release_date: e.target.value })} />
        <input type="number" placeholder="Цена" value={newItem.retail_price}
          onChange={(e) => setNewItem({ ...newItem, retail_price: e.target.value })} />
        <input type="number" placeholder="Остаток" value={newItem.stock_remaining}
          onChange={(e) => setNewItem({ ...newItem, stock_remaining: e.target.value })} />
        <button onClick={handleAdd}>Добавить</button>
      </div>

      <ul>
        {records.map((r) => (
          <li key={r.id}>
            {r.label_number} — {r.company} (${r.retail_price})
            <button onClick={() => handleDelete(r.id)}>Удалить</button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/catalog")}>← Назад</button>
    </div>
  );
};

export default AdminPage;
