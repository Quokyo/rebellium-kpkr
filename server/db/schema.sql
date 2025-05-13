DROP TABLE IF EXISTS sales, track_record, records, tracks, ensembles_musicians, musicians, ensembles CASCADE;

CREATE TABLE ensembles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50)
);

CREATE TABLE musicians (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(50),
    instrument VARCHAR(50)
);

CREATE TABLE ensembles_musicians (
    id SERIAL PRIMARY KEY,
    ensemble_id INT REFERENCES ensembles(id) ON DELETE CASCADE,
    musician_id INT REFERENCES musicians(id) ON DELETE CASCADE
);

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100)
);

CREATE TABLE records (
    id SERIAL PRIMARY KEY,
    label_number VARCHAR(50) NOT NULL,
    company VARCHAR(100),
    release_date DATE,
    wholesale_price NUMERIC(10,2),
    retail_price NUMERIC(10,2),
    sold_last_year INT DEFAULT 0,
    sold_this_year INT DEFAULT 0,
    stock_remaining INT DEFAULT 0
);

CREATE TABLE track_record (
    id SERIAL PRIMARY KEY,
    track_id INT REFERENCES tracks(id) ON DELETE CASCADE,
    record_id INT REFERENCES records(id) ON DELETE CASCADE
);

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    record_id INT REFERENCES records(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    sale_date DATE DEFAULT CURRENT_DATE
);
