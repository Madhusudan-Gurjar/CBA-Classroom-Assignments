
/* ============================================================
   PART 1: JOINS
   ============================================================ */



USE sakila;

/* 1. List all customers along with the staff member who handled their payments. */
SELECT c.first_name, c.last_name,
       s.first_name AS staff_first,
       s.last_name AS staff_last
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id
JOIN staff s ON p.staff_id = s.staff_id;


/* 2. Display all films and their corresponding categories. */
SELECT f.title, c.name AS category
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id;

/* 3. Show all actors who acted in the film 'ACADEMY DINOSAUR'. */
SELECT a.first_name, a.last_name
FROM actor a
JOIN film_actor fa ON a.actor_id = fa.actor_id
JOIN film f ON fa.film_id = f.film_id
WHERE f.title = 'ACADEMY DINOSAUR';


/* 4. List customers who live in the same city as store ID 1. */
SELECT c.first_name, c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN store s ON s.store_id = 1
JOIN address sa ON s.address_id = sa.address_id
WHERE ci.city_id = sa.city_id;


/* 5. Display all rentals along with customer name and film title. */
SELECT r.rental_id,
       c.first_name, c.last_name,
       f.title
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id;


/* 6. Find all films rented by customer ID 5. */
SELECT DISTINCT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.customer_id = 5;


/* 7. List staff members and the store cities they work in. */
SELECT s.first_name, s.last_name, ci.city
FROM staff s
JOIN store st ON s.store_id = st.store_id
JOIN address a ON st.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id;


/* 8. Show all customers and total rentals (including zero rentals). */
SELECT c.customer_id,
       c.first_name,
       COUNT(r.rental_id) AS total_rentals
FROM customer c
LEFT JOIN rental r ON c.customer_id = r.customer_id
GROUP BY c.customer_id;


/* 9. Display films and their language names. */
SELECT f.title, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;


/* 10. List all payments with customer name, staff name, and rental date. */
SELECT c.first_name AS customer,
       s.first_name AS staff,
       r.rental_date,
       p.amount
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id
JOIN staff s ON p.staff_id = s.staff_id
JOIN rental r ON p.rental_id = r.rental_id;



/* =======================
   USING NORTHWIND DATABASE
   ======================= */

USE northwind;

/* 11. List all orders with customer company name. */
SELECT o.OrderID, c.CompanyName
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID;


/* 12. Show products with their supplier names. */
SELECT p.ProductName, s.CompanyName
FROM Products p
JOIN Suppliers s ON p.SupplierID = s.SupplierID;


/* 13. Display employees and the territories they manage. */
SELECT e.FirstName, e.LastName, t.TerritoryDescription
FROM Employees e
JOIN EmployeeTerritories et ON e.EmployeeID = et.EmployeeID
JOIN Territories t ON et.TerritoryID = t.TerritoryID;


/* 14. List orders with shipper company name. */
SELECT o.OrderID, s.CompanyName
FROM Orders o
JOIN Shippers s ON o.ShipVia = s.ShipperID;


/* 15. Show order details with product name and quantity. */
SELECT od.OrderID, p.ProductName, od.Quantity
FROM `Order Details` od
JOIN Products p ON od.ProductID = p.ProductID;


/* 16. List customers who placed orders in 1997. */
SELECT DISTINCT c.CompanyName
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
WHERE YEAR(o.OrderDate) = 1997;


/* 17. Display products and their category names. */
SELECT p.ProductName, c.CategoryName
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID;


/* 18. Find employees who report to 'Andrew Fuller'. */
SELECT e.FirstName, e.LastName
FROM Employees e
JOIN Employees m ON e.ReportsTo = m.EmployeeID
WHERE m.FirstName = 'Andrew'
AND m.LastName = 'Fuller';


/* 19. List all orders and the employee who handled them. */
SELECT o.OrderID, e.FirstName, e.LastName
FROM Orders o
JOIN Employees e ON o.EmployeeID = e.EmployeeID;


/* 20. Show suppliers and the products they supply. */
SELECT s.CompanyName, p.ProductName
FROM Suppliers s
JOIN Products p ON s.SupplierID = p.SupplierID;



/* ============================================================
   PART 2: SUBQUERIES
   ============================================================ */


/* =======================
   USING SAKILA DATABASE
   ======================= */

USE sakila;

/* 1. Films above average rental rate */
SELECT title
FROM film
WHERE rental_rate > (SELECT AVG(rental_rate) FROM film);


/* 2. Customers with more payments than average */
SELECT customer_id
FROM payment
GROUP BY customer_id
HAVING COUNT(*) > (
    SELECT AVG(cnt)
    FROM (
        SELECT COUNT(*) AS cnt
        FROM payment
        GROUP BY customer_id
    ) temp
);


/* 3. Actors in more than 10 films */
SELECT actor_id
FROM film_actor
GROUP BY actor_id
HAVING COUNT(film_id) > 10;


/* 4. Films never rented */
SELECT title
FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT i.film_id
    FROM rental r
    JOIN inventory i ON r.inventory_id = i.inventory_id
);


/* 5. Customers who spent more than $100 */
SELECT customer_id
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100;


/* 6. Most expensive film */
SELECT title
FROM film
WHERE replacement_cost = (
    SELECT MAX(replacement_cost) FROM film
);


/* 7. Films longer than average length */
SELECT title
FROM film
WHERE length > (SELECT AVG(length) FROM film);


/* 8. Staff with above average rentals handled */
SELECT staff_id
FROM rental
GROUP BY staff_id
HAVING COUNT(*) > (
    SELECT AVG(cnt)
    FROM (
        SELECT COUNT(*) AS cnt
        FROM rental
        GROUP BY staff_id
    ) temp
);


/* =======================
   USING EMPLOYEES DATABASE
   ======================= */

USE employees;

/* 9. Employees earning more than average salary */
SELECT emp_no
FROM salaries
WHERE salary > (SELECT AVG(salary) FROM salaries);


/* 10. Second highest salary */
SELECT MAX(salary)
FROM salaries
WHERE salary < (SELECT MAX(salary) FROM salaries);



/* ============================================================
   PART 3: INDEXING
   ============================================================ */

USE sakila;

/* 1. Create index on last_name */
CREATE INDEX idx_lastname ON customer(last_name);


/* 2. Composite index */
CREATE INDEX idx_name ON staff(first_name, last_name);


/* 3. Show indexes */
SHOW INDEX FROM film;


/* 4. Drop index */
DROP INDEX idx_name ON staff;


/* 5. Unique index */
CREATE UNIQUE INDEX idx_email ON customer(email);


/* 6. Foreign key index */
CREATE INDEX idx_customer_id ON rental(customer_id);


/* 7. Full-text index */
CREATE FULLTEXT INDEX idx_description ON film(description);


/* 8. Use EXPLAIN */
EXPLAIN SELECT * FROM rental WHERE rental_date = '2005-05-25';


/* 9. Covering index example */
CREATE INDEX idx_payment_cover ON payment(customer_id, amount);


/* 10. Example query using index */
SELECT * FROM payment WHERE customer_id = 5;
