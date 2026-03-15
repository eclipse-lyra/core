-- DuckDB: data types and built-in functions
-- Explore type constructors and common string/date/math functions.

SELECT
    CAST('42' AS INT) AS parsed_int,
    CAST('3.14' AS DOUBLE) AS parsed_double,
    CAST('2024-01-15' AS DATE) AS parsed_date;

SELECT
    upper('hello') AS upper_case,
    lower('WORLD') AS lower_case,
    length('DuckDB') AS len,
    substr('DuckDB', 1, 4) AS sub;

SELECT
    round(3.14159, 2) AS rounded,
    floor(2.7) AS flr,
    ceil(2.2) AS cl,
    abs(-10) AS absolute;

SELECT
    date_part('year', current_date) AS year,
    date_part('month', current_date) AS month,
    strftime(current_timestamp, '%Y-%m-%d %H:%M') AS formatted;
