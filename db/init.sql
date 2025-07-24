CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO records (name) VALUES
('Alice'),
('Bob'),
('Charlie'),
('David'),
('Eve');
