-- 1. Use or create schema
CREATE SCHEMA IF NOT EXISTS children_vaccine;
SET search_path TO children_vaccine;

-- 2. Tables
CREATE TABLE IF NOT EXISTS parent (
    parent_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS child (
    child_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS parent_child (
    parent_id INT REFERENCES parent(parent_id),
    child_id INT REFERENCES child(child_id),
    PRIMARY KEY (parent_id, child_id)
);

CREATE TABLE IF NOT EXISTS medical_record (
    record_id SERIAL PRIMARY KEY,
    child_id INT REFERENCES child(child_id),
    checkup_date DATE NOT NULL,
    weight NUMERIC(5,2) NOT NULL,
    height NUMERIC(4,2) NOT NULL, -- in meters
    notes TEXT
);

CREATE TABLE IF NOT EXISTS vaccination (
    vaccination_id SERIAL PRIMARY KEY,
    child_id INT REFERENCES child(child_id),
    vaccine_name VARCHAR(50) NOT NULL,
    vaccination_date DATE NOT NULL,
    administered_by VARCHAR(100)
);

-- 3. Sample Data (abbreviated for clarity, adjust as needed)

-- Parents
INSERT INTO parent (first_name, last_name) VALUES
('John', 'Doe'), ('Jane', 'Doe'), ('Paul', 'Smith'), ('Mary', 'Smith');

-- Children
INSERT INTO child (first_name, last_name, date_of_birth, gender) VALUES
('Alice', 'Doe', '2021-01-10', 'Female'),   -- 1
('Bob', 'Doe', '2020-02-20', 'Male'),       -- 2
('Cathy', 'Doe', '2022-03-15', 'F'),        -- 3
('Dylan', 'Smith', '2021-04-12', 'm'),      -- 4
('Eve', 'Smith', '2022-05-18', 'f'),        -- 5
('Frank', 'Smith', '2023-06-22', 'M'),      -- 6
('Grace', 'Doe', '2021-07-30', 'female'),   -- 7
('Hank', 'Doe', '2021-08-05', 'MALE'),      -- 8
('Ivy', 'Smith', '2022-09-11', 'FEMALE'),   -- 9
('Jack', 'Doe', '2023-10-25', 'male');      -- 10

-- Parent-Child (some children share parents)
INSERT INTO parent_child (parent_id, child_id) VALUES
(1,1),(2,1), -- Alice has John and Jane as parents
(1,2),(2,2), -- Bob has John and Jane
(1,3),(2,3), -- Cathy has John and Jane
(3,4),(4,4), -- Dylan has Paul and Mary
(3,5),(4,5), -- Eve has Paul and Mary
(3,6),(4,6), -- Frank has Paul and Mary
(1,7),(2,7), -- Grace has John and Jane
(1,8),(2,8), -- Hank has John and Jane
(3,9),(4,9), -- Ivy has Paul and Mary
(1,10),(2,10); -- Jack has John and Jane

-- Medical Records (weight in kg, height in meters, some notes mention disease)
INSERT INTO medical_record (child_id, checkup_date, weight, height, notes) VALUES
(1, '2025-01-10', 13.4, 0.95, 'Healthy, no issues'),
(2, '2025-01-15', 14.2, 1.00, 'Minor cold, resolved'),
(3, '2025-01-20', 11.8, 0.90, 'Healthy'),
(4, '2025-02-05', 13.1, 0.98, 'Mild rash, treated'),
(5, '2025-03-12', 12.5, 0.92, 'Had measles, treated'),
(6, '2025-04-18', 10.7, 0.89, 'Healthy'),
(7, '2025-04-24', 15.0, 1.05, 'Healthy'),
(8, '2025-03-09', 12.3, 0.91, 'Low weight, dietary advice given'),
(9, '2025-05-01', 14.8, 1.06, 'Healthy'),
(10, '2025-05-06', 12.2, 0.90, 'Flu, recovered');

-- Vaccinations (some in last year)
INSERT INTO vaccination (child_id, vaccine_name, vaccination_date, administered_by) VALUES
(1, 'Measles', '2024-06-01', 'Nurse A'),
(2, 'Polio', '2025-03-01', 'Nurse B'),
(3, 'Measles', '2024-12-01', 'Nurse C'),
(4, 'Polio', '2023-04-01', 'Nurse A'),
(5, 'Measles', '2025-02-01', 'Nurse D'),
(6, 'Polio', '2025-04-01', 'Nurse E'),
(7, 'Measles', '2025-05-01', 'Nurse F'),
(8, 'Polio', '2022-10-01', 'Nurse G'),
(9, 'Measles', '2025-01-15', 'Nurse H'),
(10, 'Polio', '2025-05-01', 'Nurse I');

-- 4. Queries

-- a) How many children are female/male (case-insensitive, shorthand and full)?
SELECT
  COUNT(*) FILTER (WHERE LOWER(gender) IN ('f', 'female')) AS female_count,
  COUNT(*) FILTER (WHERE LOWER(gender) IN ('m', 'male')) AS male_count
FROM child;

-- b) How many children are under the age of 4 years 1 month 20 days?
SELECT COUNT(*)
FROM child
WHERE age(now(), date_of_birth) < INTERVAL '4 years 1 month 20 days';

-- c) How many parents have more than 3 children?
SELECT COUNT(*) AS parents_with_more_than_3_children
FROM (
  SELECT parent_id, COUNT(DISTINCT child_id) as num_children
  FROM parent_child
  GROUP BY parent_id
  HAVING COUNT(DISTINCT child_id) > 3
) t;

-- d) How many children are underweight? (BMI < 14 as an example, adjust threshold as needed)
-- BMI = weight / (height^2)
SELECT COUNT(DISTINCT child_id) AS underweight_children
FROM medical_record
WHERE (weight / (height * height)) < 14;

-- e) What is the average BMI for the children?
SELECT ROUND(AVG(weight / (height * height)), 2) AS average_bmi
FROM medical_record;

-- f) How many children received vaccinations in the last year?
SELECT COUNT(DISTINCT child_id) AS vaccinated_last_year
FROM vaccination
WHERE vaccination_date >= (CURRENT_DATE - INTERVAL '1 year');

-- g) How many children have at least one disease recorded (notes contains 'measles', 'flu', 'cold', 'rash', case-insensitive)?
SELECT COUNT(DISTINCT child_id) AS children_with_disease
FROM medical_record
WHERE notes ~* '(measles|flu|cold|rash)';
