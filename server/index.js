import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://localhost/rebellium",
});

const app = express();
app.use(cors());
app.use(express.json());

// Получить все пластинки
app.get("/api/records", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM records ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error("Ошибка при получении пластинок:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Получить пластинку по id
app.get("/api/records/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM records WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Пластинка не найдена" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error("Ошибка при получении пластинки:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Совершить покупку (уменьшить stock и увеличить sold)
app.post("/api/sales", async (req, res) => {
  const { recordId, quantity } = req.body;

  try {
    await pool.query(
      `UPDATE records
       SET sold_this_year = sold_this_year + $1,
           stock_remaining = stock_remaining - $1
       WHERE id = $2`,
      [quantity, recordId]
    );

    const result = await pool.query(
      `INSERT INTO sales (record_id, quantity)
       VALUES ($1, $2) RETURNING *`,
      [recordId, quantity]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка при продаже пластинки:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

// Получить топ продаж
app.get("/api/records/top", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, label_number, company, sold_this_year
       FROM records
       ORDER BY sold_this_year DESC
       LIMIT 5`
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Ошибка при получении топа продаж:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
