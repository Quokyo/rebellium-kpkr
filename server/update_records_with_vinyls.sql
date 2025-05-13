-- Расширяем таблицу records
ALTER TABLE records ADD COLUMN title TEXT;
ALTER TABLE records ADD COLUMN artist TEXT;
ALTER TABLE records ADD COLUMN genre TEXT;
ALTER TABLE records ADD COLUMN cover TEXT;

-- Добавляем 3 альбома с полными данными
INSERT INTO records
(label_number, company, release_date, wholesale_price, retail_price, sold_last_year, sold_this_year, stock_remaining, title, artist, genre, cover)
VALUES
('0001', 'Columbia Records', '2017-04-14', 10.00, 22.99, 0, 0, 5, 'DAMN.', 'Kendrick Lamar', 'Hip-Hop',
 'https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png'),

('0002', 'XL Recordings', '2019-05-17', 12.00, 19.99, 0, 0, 10, 'IGOR', 'Tyler, The Creator', 'Hip-Hop',
 'https://upload.wikimedia.org/wikipedia/en/0/0b/Tyler%2C_the_Creator_-_Igor.png'),

('0003', 'Daft Life', '2013-05-17', 15.00, 24.99, 0, 0, 8, 'Random Access Memories', 'Daft Punk', 'Electronic',
 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg');
