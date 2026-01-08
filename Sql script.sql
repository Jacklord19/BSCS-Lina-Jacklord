-- CREATE DATABASE
CREATE DATABASE simple_student_db;
USE simple_student_db;

-- DEPARTMENTS TABLE
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);

-- STUDENTS TABLE
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL
);

-- TEACHERS TABLE
CREATE TABLE teachers (
    teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(50) NOT NULL,
    dept_id INT
);

-- COURSES TABLE
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    dept_id INT,
    teacher_id INT
);

-- ENROLLMENTS TABLE
CREATE TABLE enrollments (
    enroll_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    grade DECIMAL(3,2)
);

-- INSERT DATA (5 ROWS EACH)

INSERT INTO departments (dept_name) VALUES
('Computer Science'),
('IT'),
('Engineering'),
('Business'),
('Education');

INSERT INTO students (student_name) VALUES
('Mark Cruz'),
('Anna Reyes'),
('Paul Santos'),
('Lisa Garcia'),
('John Mendoza');

INSERT INTO teachers (teacher_name, dept_id) VALUES
('Mr. Cruz', 1),
('Ms. Santos', 2),
('Engr. Reyes', 3),
('Ms. Lopez', 4),
('Mr. Garcia', 5);

INSERT INTO courses (course_name, dept_id, teacher_id) VALUES
('Programming', 1, 1),
('Databases', 2, 2),
('Math', 3, 3),
('Management', 4, 4),
('Teaching', 5, 5);

INSERT INTO enrollments (student_id, course_id, grade) VALUES
(1, 1, 1.50),
(2, 2, 1.75),
(3, 3, 2.00),
(4, 4, 1.25),
(5, 5, 1.00);

-- SIMPLE SELECT
SELECT * FROM students;

-- SELECT WITH ORDER BY
SELECT * FROM students
ORDER BY student_name;

-- GROUP BY
SELECT dept_id, COUNT(course_id) AS total_courses
FROM courses
GROUP BY dept_id;

-- JOIN QUERY
SELECT 
    students.student_name,
    courses.course_name,
    teachers.teacher_name,
    enrollments.grade
FROM enrollments
JOIN students ON enrollments.student_id = students.student_id
JOIN courses ON enrollments.course_id = courses.course_id
JOIN teachers ON courses.teacher_id = teachers.teacher_id;

-- UPDATE
UPDATE students
SET student_name = 'Mark C.'
WHERE student_id = 1;

-- DELETE
DELETE FROM enrollments
WHERE enroll_id = 5;
