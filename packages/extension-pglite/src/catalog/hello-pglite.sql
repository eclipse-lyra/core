-- Hello PGlite: basic PostgreSQL in the browser
-- Run this in the SQL editor with PGlite selected as adapter.

SELECT 'Hello, PostgreSQL!' AS greeting;

SELECT 1 + 2 AS sum, 10 * 5 AS product;

SELECT current_date AS today, current_timestamp AS now;

-- Create a small table and query it
CREATE TABLE IF NOT EXISTS sample (id INT, name TEXT);
TRUNCATE sample;
INSERT INTO sample VALUES (1, 'Alice'), (2, 'Bob'), (3, 'Carol');
SELECT * FROM sample;
