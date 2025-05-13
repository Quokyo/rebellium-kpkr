# REBELLIUM – Магазин Музыки 🎧

Полноценный веб-проект по продаже виниловых пластинок, выполненный в рамках курсовой работы. Поддерживает каталог, корзину, авторизацию, просмотр карточки товара и административную панель.

---

## 🚀 Стек технологий

* **Frontend**: React, React Router, CSS
* **Backend**: Node.js + Express
* **Database**: PostgreSQL
* **Dev Tools**: VS Code, Nodemon, Postman

---

## 📦 Установка

### Клонирование репозитория:

```bash
git clone https://github.com/ваш-юзернейм/rebellium.git
cd rebellium
```

### Установка зависимостей:

```bash
cd server
npm install

cd ../frontend
npm install
```

---

## 🧪 Запуск проекта

### Backend:

```bash
cd server
npm run dev
```

### Frontend:

```bash
cd frontend
npm start
```

---

## 🗃 Настройка базы данных

1. Убедитесь, что установлен PostgreSQL
2. Создайте БД `rebellium`:

   ```bash
   createdb rebellium
   ```
3. Примените схемы:

   ```bash
   psql rebellium < schema.sql
   psql rebellium < update_records_with_vinyls.sql
   ```

---

## 📁 Структура

```
REBELLIUM/
├── frontend/      # React-приложение
├── server/        # Express + PostgreSQL
└── README.md
```

---

##
