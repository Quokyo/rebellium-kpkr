import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function CatalogPage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/records").then((res) => setAlbums(res.data));
  }, []);

  const buyAlbum = (id) => {
    axios
      .post("http://localhost:3001/api/sales", { recordId: id, quantity: 1 })
      .then(() => alert("Покупка успешна!"));
  };

  return (
    <div className="App">
      <h1>REBELLIUM – Магазин Музыки</h1>

      <div className="vinyl-grid">
        {albums.map((album) => (
          <div key={album.id} className="vinyl-card">
            <div className="vinyl-img-wrapper">
              <img src={album.cover} alt={album.title} />
            </div>

            <h3>{album.title}</h3>
            <p>{album.artist} ({album.release_date?.split("-")[0] || "Год неизвестен"})</p>

            <div className="tags">
              <span className="tag">{album.genre}</span>
              <span className="tag">Vinyl</span>
            </div>

            <p><strong>${album.retail_price}</strong></p>
            <p>Остаток: {album.stock_remaining}</p>

            <button onClick={() => buyAlbum(album.id)}>В корзину</button>
            <button onClick={() => window.location.href = `/product/${album.id}`}>Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
