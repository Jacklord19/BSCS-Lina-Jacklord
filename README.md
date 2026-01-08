System Overview and Purpose
The Simple Student Information System is a basic database designed to store and manage essential academic information in a school environment. The system keeps records of students, departments, teachers, courses, and student enrollments.

Its main purpose is to:
 *Organize student and academic data in a structured way
 *Track which students are enrolled in which courses
 *Identify which teachers handle specific courses
 *Group courses and teachers by department
 *Provide an easy way to retrieve, update, and manage student records
This system demonstrates proper database design using multiple related tables and supports basic operations such as viewing records, updating information, and deleting data.

Table Descriptions and Relationships
1. Departments Table
 Stores the different academic departments in the institution.
Fields:
dept_id – Primary Key; uniquely identifies each department
dept_name – Name of the department
Relationship:
One department can have many teachers
One department can offer many courses

3. Students Table
Contains basic information about students.
Fields:
student_id – Primary Key; uniquely identifies each student
student_name – Name of the student
Relationship:
One student can have many enrollments

3. Teachers Table
Stores information about teachers and their assigned departments.
Fields:
teacher_id – Primary Key; uniquely identifies each teacher
teacher_name – Name of the teacher
dept_id – Refers to the department where the teacher belongs
Relationship:
Each teacher belongs to one department
One teacher can teach many courses

4. Courses Table
Holds information about courses offered by departments and handled by teachers.
Fields:
course_id – Primary Key; uniquely identifies each course
course_name – Name of the course
dept_id – Indicates which department offers the course
teacher_id – Indicates which teacher handles the course
Relationship:
Each course belongs to one department
Each course is handled by one teacher
One course can have many enrolled students

5. Enrollments Table
Serves as a linking table between students and courses.
Fields:
enroll_id – Primary Key; uniquely identifies each enrollment record
student_id – Identifies the enrolled student
course_id – Identifies the course
grade – Student’s grade in the course
Relationship:
Each enrollment links one student to one course
A student may enroll in multiple courses
A course may have multiple students
Summary of Relationships
Departments → Teachers (One-to-Many)
Departments → Courses (One-to-Many)
Teachers → Courses (One-to-Many)
Students → Enrollments (One-to-Many)
Courses → Enrollments (One-to-Many)
![e6e0d78f-3f5e-4ac6-b199-61d6eca745c9](https://github.com/user-attachments/assets/768fbcc4-b729-470f-a05e-55776ee38176)
