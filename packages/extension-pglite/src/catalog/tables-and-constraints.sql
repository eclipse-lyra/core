-- PGlite: tables and constraints
-- Demonstrates CREATE TABLE with primary key, unique, and check constraints.

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(20) UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price DECIMAL(10, 2) CHECK (price >= 0)
);

INSERT INTO products (sku, name, price) VALUES
    ('W-001', 'Widget', 9.99),
    ('G-001', 'Gadget', 24.50);

-- Foreign key example
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    quantity INT CHECK (quantity > 0)
);
INSERT INTO orders (product_id, quantity) VALUES (1, 10), (2, 5);

SELECT p.sku, p.name, o.quantity, p.price * o.quantity AS line_total
FROM orders o
JOIN products p ON p.id = o.product_id;
