-- Музыканты
INSERT INTO musicians (name, role, instrument) VALUES
('Post Malone', 'исполнитель', 'вокал'),
('Playboi Carti', 'исполнитель', 'вокал'),
('Travis Scott', 'исполнитель', 'вокал');

-- Ансамбль (лейбл)
INSERT INTO ensembles (name, type) VALUES
('American Stars', 'лейбл');

-- Связи музыкантов и ансамбля
INSERT INTO ensembles_musicians (ensemble_id, musician_id) VALUES
(1, 1), (1, 2), (1, 3);

-- Треки
INSERT INTO tracks (title, author) VALUES
('Circles', 'Post Malone'),
('Sky', 'Playboi Carti'),
('SICKO MODE', 'Travis Scott');

-- Пластинка
INSERT INTO records (
    label_number, company, release_date,
    wholesale_price, retail_price,
    sold_last_year, sold_this_year, stock_remaining
) VALUES (
    '0001', 'Republic Records', '2019-09-06',
    5.00, 10.00,
    1000, 500, 200
);

-- Привязка треков к пластинке
INSERT INTO track_record (track_id, record_id) VALUES
(1, 1),
(2, 1),
(3, 1);
