
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










========================================================================================




Perfect. Based on the questions you've been asking over the last few weeks, you've covered:

✅ Variables (let, const)
✅ Data types
✅ Operators
✅ Conditionals (if, switch, ternary)
✅ Loops (for, while, for...of, for...in)
✅ Functions
✅ Arrays
✅ Objects
✅ String methods
✅ Number methods
✅ Array methods (map, filter, find, reduce, sort, some, every, includes)
✅ Regular Expressions
✅ Sets
✅ Constructors
✅ Prototypes
✅ Classes
✅ this
✅ async/await
✅ try...catch

So here's a challenge that combines almost everything you've learned.

Intermediate JavaScript Challenge
Mini Banking System

Create a banking application.

Part 1: Create an Account class

The constructor should receive

name
pin
balance

Example

const philip = new Account("Philip", 1234, 5000);
Every account should also have

Generate automatically

accountNumber

It should be a random 10-digit number.

Methods
deposit(amount)
Amount cannot be zero or negative.
Add money to balance.
Return the new balance.

withdraw(amount, pin)

Rules

PIN must match.
Amount must be greater than 0.
Balance cannot become negative.

Use

try...catch

to handle errors.

transfer(receiver, amount, pin)

Example

philip.transfer(john, 500, 1234);

Rules

Receiver must be an Account object.
PIN must match.
Sender must have enough money.
Update both balances.
changePin(oldPin, newPin)

Rules

Old PIN must match.
New PIN must be exactly 4 digits.

Hint:

Think about using regex.




checkBalance(pin)

Only show the balance if the PIN is correct.

accountInfo()

Return

Name: Philip
Account Number: 1234567890
Balance: ₦6500

Do not include the PIN.

Part 2
Create a Bank class

Constructor

bankName

Create

accounts = []
Methods
openAccount(account)

Adds an Account object.

Don't allow duplicate account numbers.

closeAccount(accountNumber)

Remove the account.

findAccount(accountNumber)

Return the account.

Use

find()
totalMoney()

Return the total money stored in the bank.

Use

reduce()
richestCustomer()

Return the account with the highest balance.

customersWithMoreThan(amount)

Return every customer whose balance is greater than the amount.

Use

filter()
sortAccounts()

Sort accounts by balance (highest first).

bankReport()

Return

========================
My Bank

Customers: 5

Total Money: ₦2,350,000

Richest Customer:
Philip (₦800,000)
========================
Part 3
Transaction History

Each account should have

transactions = [];

Whenever someone

deposits
withdraws
transfers

save a record.

Example

{
    type: "Deposit",
    amount: 5000,
    balanceAfter: 12000,
    date: "2026-07-10"
}

Create

showTransactions()
Part 4
Async Challenge

Create

loadUsers()

Fetch

https://dummyjson.com/users

Using

async/await

Print only

First Name
Last Name
Email

Wrap everything in

try...catch
Part 5
Regex

Create

isStrongPassword(password)

Password must contain

Uppercase
Lowercase
Number
Special character
Minimum 8 characters

Return

true

or

false
Bonus

Without using AI or Google if possible.

Create a function

bankStatistics()

Return

{
    totalCustomers: 10,
    averageBalance: 56000,
    richestCustomer: "Philip",
    poorestCustomer: "John",
    totalDeposits: ...,
    totalWithdrawals: ...
}
Rules
❌ No global arrays (let the Bank class manage its own accounts).
❌ Don't use prompt() or browser dialogs.
✅ Use classes properly.
✅ Use array methods where appropriate.
✅ Use try...catch for operations that can fail.
✅ Write clean, readable code.
Difficulty: 8.5/10

This is around the level of a practical coding assignment for a junior JavaScript developer. If you can complete it on your own, you'll have practiced most of the core JavaScript concepts you've learned so far.

One more suggestion: after you finish it, don't just ask whether it works. Ask yourself:

Can I make this method shorter?
Can I avoid duplicate code?
Does each class have a single responsibility?
Am I storing data that could instead be calculated when needed?

Thinking this way is what helps you progress from writing working code to writing good code.