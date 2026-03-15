-- PGlite: joins and subqueries
-- Uses the products/orders tables from tables-and-constraints.sql if run after it.

-- Subquery: products with at least one order
SELECT * FROM products
WHERE id IN (SELECT product_id FROM orders);

-- Join with aggregation
SELECT p.name, SUM(o.quantity) AS total_qty, SUM(p.price * o.quantity) AS revenue
FROM orders o
JOIN products p ON p.id = o.product_id
GROUP BY p.id, p.name;

-- Scalar subquery
SELECT sku, name, price,
    (SELECT COUNT(*) FROM orders WHERE product_id = products.id) AS order_count
FROM products;
