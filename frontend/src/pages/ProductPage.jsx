import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

const ProductPage = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/records/${id}`)
      .then((res) => setRecord(res.data))
      .catch(() => setRecord(null));
  }, [id]);

  if (!record) return <div className="App">Загрузка...</div>;

  return (
    <div className="App">
      <h2>{record.title}</h2>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginTop: "1rem" }}>
        <img
          src={record.cover}
          alt={record.title}
          style={{ width: "300px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
        />
        <div style={{ textAlign: "left" }}>
          <p><strong>Исполнитель:</strong> {record.artist}</p>
          <p><strong>Жанр:</strong> {record.genre}</p>
          <p><strong>Цена:</strong> ${record.retail_price}</p>
          <p><strong>Остаток:</strong> {record.stock_remaining}</p>
          <p><strong>Дата релиза:</strong> {record.release_date}</p>
          <button style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#7f5af0",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
