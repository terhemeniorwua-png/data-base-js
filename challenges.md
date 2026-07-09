
JavaScript Challenge: Student Management System
Create a simple student management system using classes.

Requirements
1. Create a Student class
The constructor should accept:

name
age
course
scores
Example:

new Student("Philip", 25, "Computer Science", [80, 75, 90, 85]);
2. Inside the class create the following methods
getAverage()
Returns the student's average score.

Example

80
getGrade()
Return

A = 70 - 100
B = 60 - 69
C = 50 - 59
D = 40 - 49
F = below 40
hasPassed()
Returns

true
if average is 50 or above, otherwise

false
addScore(score)
Adds a new score into the scores array.

Example

student.addScore(95);
displayInfo()
Returns a string like

Name: Philip
Course: Computer Science
Average: 82.5
Grade: A
Status: Passed


Part 2
Create another class called

School
Its constructor should receive

schoolName
Inside it create an empty array called

students
Create these methods
addStudent(student)
Adds a Student object into the students array.

removeStudent(name)
Removes the student whose name matches.

findStudent(name)
Returns the student object.

Use

find()
topStudent()
Returns the student with the highest average.

You may use

reduce()

or a loop

getPassedStudents()
Returns an array of only students that passed.

Use

filter()
getStudentsByCourse(course)
Returns every student taking that course.

Example

school.getStudentsByCourse("Computer Science");
schoolReport()
Return something similar to

School: Bright Future Academy

Total Students: 5

Passed: 4

Failed: 1

Top Student: Philip (92.5)
Sample Data
const s1 = new Student("Philip", 25, "Computer Science", [80, 90, 75]);
const s2 = new Student("John", 20, "Engineering", [45, 55, 60]);
const s3 = new Student("Mary", 22, "Computer Science", [95, 88, 90]);
const s4 = new Student("Grace", 19, "Medicine", [30, 40, 35]);

const school = new School("Bright Future Academy");

school.addStudent(s1);
school.addStudent(s2);
school.addStudent(s3);
school.addStudent(s4);
Bonus Challenges
If you finish early, try these without looking up the answers:

Prevent duplicate student names from being added.

Sort students by average score (highest first).

Add a unique student ID automatically.

Count how many students received each grade (A, B, C, D, F).

Save all students as plain objects using JSON.stringify(), then restore them into Student instances.

Concepts this tests
Variables and data types

Functions and methods

Arrays

Objects

Loops

Conditional statements

map()

filter()

find()

reduce()

sort()

this

Constructors

Classes

Object interaction (one class using instances of another)

This is about the difficulty of an early technical interview or a solid coding assessment. Try to solve it on your own first. If you 
get stuck, share your code rather than asking for the full solution, and I'll help you debug it step by step.



