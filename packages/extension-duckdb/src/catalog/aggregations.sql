-- DuckDB: aggregations and filters
-- Demonstrates GROUP BY, HAVING, WHERE, and common aggregate functions.

CREATE OR REPLACE TEMP TABLE sales (
    region VARCHAR,
    product VARCHAR,
    amount DECIMAL(10, 2)
);
INSERT INTO sales VALUES
    ('North', 'Widget', 100.00),
    ('North', 'Gadget', 250.50),
    ('South', 'Widget', 75.00),
    ('South', 'Gadget', 320.00),
    ('North', 'Widget', 90.00);

-- Filter and aggregate by region
SELECT region, SUM(amount) AS total, COUNT(*) AS orders
FROM sales
WHERE amount > 80
GROUP BY region
HAVING SUM(amount) > 200
ORDER BY total DESC;

-- Per-product totals
SELECT product, SUM(amount) AS total, AVG(amount) AS avg_order
FROM sales
GROUP BY product;
