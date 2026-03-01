USE sakila;

-- Part 1
CREATE TABLE movie_reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    film_id SMALLINT UNSIGNED NOT NULL,
    customer_id SMALLINT UNSIGNED NOT NULL,
    rating TINYINT UNSIGNED,
    review_text TEXT,
    review_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_review_film
        FOREIGN KEY (film_id) REFERENCES film(film_id)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_review_customer
        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE CASCADE
);

ALTER TABLE film
ADD COLUMN release_year YEAR;

ALTER TABLE film
MODIFY rating VARCHAR(10);

ALTER TABLE film
DROP COLUMN original_language_id;

ALTER TABLE customer
ADD CONSTRAINT unique_email UNIQUE (email);

ALTER TABLE movie_reviews
ADD CONSTRAINT chk_rating CHECK (rating BETWEEN 1 AND 5);

RENAME TABLE movie_reviews TO film_reviews;

CREATE INDEX idx_actor_lastname
ON actor(last_name);

CREATE INDEX idx_customer_rental
ON rental(customer_id, rental_date);

DROP INDEX idx_actor_lastname ON actor;

CREATE TABLE top_customers LIKE customer;

CREATE TABLE archived_payments AS
SELECT * FROM payment;

ALTER TABLE inventory
ADD CONSTRAINT fk_inventory_film
FOREIGN KEY (film_id) REFERENCES film(film_id);

DROP TABLE archived_payments;

CREATE VIEW customer_payment_summary AS
SELECT 
    customer_id,
    SUM(amount) AS total_payment
FROM payment
GROUP BY customer_id;

-- =====================================================
-- USE DATABASE
-- =====================================================



-- =====================================================
-- PART 2 – DML (Data Manipulation Language)
-- =====================================================

-- 1 Insert new actor
INSERT INTO actor (first_name, last_name, last_update)
VALUES ('MADHU', 'GURJAR', NOW());

-- 2 Insert multiple records into film_reviews
INSERT INTO film_reviews (film_id, customer_id, rating, review_text)
VALUES
(1, 1, 5, 'Excellent Movie'),
(2, 2, 4, 'Very Good Movie');

-- 3 Update rental_rate of Action films to 4.99
UPDATE film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
SET f.rental_rate = 4.99
WHERE c.name = 'Action';

-- 4 Increase rental duration by 2 for films longer than 120 minutes
UPDATE film
SET rental_duration = rental_duration + 2
WHERE length > 120;

-- 5 Delete customers who never made rental
DELETE FROM customer
WHERE customer_id NOT IN (
    SELECT customer_id FROM rental
);

-- 6 Update email domain
UPDATE customer
SET email = REPLACE(email, '@sakilacustomer.org', '@newmail.com');

-- 7 Insert new category "Web Series"
INSERT INTO category (name, last_update)
VALUES ('Web Series', NOW());

-- 8 Assign film to "Web Series"
INSERT INTO film_category (film_id, category_id)
SELECT 1, category_id
FROM category
WHERE name = 'Web Series';

-- 9 Increase payment amount by 10% for year 2006
UPDATE payment
SET amount = amount * 1.10
WHERE YEAR(payment_date) = 2006;

-- 10 Delete films not present in inventory
DELETE FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT film_id FROM inventory
);

-- 11 Insert new staff member
INSERT INTO staff 
(first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES
('RAJ', 'SHARMA', 1, 'raj@store.com', 1, 1, 'raj', 'pass123', NOW());

-- 12 Update address for customers in London
UPDATE address a
JOIN customer c ON a.address_id = c.address_id
JOIN city ci ON a.city_id = ci.city_id
SET a.address = 'New Updated Street'
WHERE ci.city = 'London';

-- 13 Delete rental records older than 2005
DELETE FROM rental
WHERE YEAR(rental_date) < 2005;

-- 14 Copy top 5 paying customers into top_customers
INSERT INTO top_customers
SELECT *
FROM customer
WHERE customer_id IN (
    SELECT customer_id
    FROM payment
    GROUP BY customer_id
    ORDER BY SUM(amount) DESC
    LIMIT 5
);

-- 15 Restore deleted film data from backup
INSERT INTO film
SELECT *
FROM film_backup;

-- =====================================================
-- PART 3 – DQL (Data Query Language)
-- =====================================================

-- 1 Retrieve all actors
SELECT * FROM actor;

-- 2 Find films with rental rate > 3
SELECT * FROM film
WHERE rental_rate > 3;

-- 3 List customers from London
SELECT c.*
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city = 'London';

-- 4 Display films released in 2006
SELECT * FROM film
WHERE release_year = 2006;

-- 5 Find customers whose first name starts with 'A'
SELECT * FROM customer
WHERE first_name LIKE 'A%';

-- 6 Count total number of films
SELECT COUNT(*) AS total_films FROM film;

-- 7 Find average rental rate
SELECT AVG(rental_rate) AS avg_rental_rate FROM film;

-- 8 Find maximum film length
SELECT MAX(length) AS max_length FROM film;

-- 9 Calculate total revenue generated
SELECT SUM(amount) AS total_revenue FROM payment;

-- 10 Find number of rentals per customer
SELECT customer_id, COUNT(*) AS rental_count
FROM rental
GROUP BY customer_id;