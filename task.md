Part A: Authentication (25 marks)
1. Build a landing page with two entry points: “I am a Student” and “I am a Staff Member.”

2. Student flow:
• If the student is new (no matching record exists), they should only be presented with
a signup form. Login must not be reachable until an account exists.
• Signup should collect at minimum: full name, student ID, email, password, and the
class/section they belong to (e.g. “Grade 10A”).
• Once signup is complete, the student is redirected to the login form.
• A returning student (one who already has an account) should go straight to login
and, on success, land on the Student Dashboard.

3. Staff flow:
• Staff accounts are pre registered by an admin (you can hardcode 2 to 3 staff accounts
in your initial data, each with a name, staff ID, password, and the class they are
assigned to teach, e.g. “Mr. Bello, assigned to Grade 10A”). Staff do not self signup
in this exam.
• Staff log in with staff ID and password and land on the Staff Dashboard.

4. Passwords do not need real encryption for this exam, but you must not display any pass-
word in plain text anywhere in the UI after signup.

5. Sessions should persist across a page refresh (e.g. store the logged in user in
localStorage or sessionStorage) until the user logs out.


Part B: Student Dashboard (20 marks)
A logged in student should be able to:
1. View their own profile (name, ID, class, email).

2. View their own grades/scores for at least 3 subjects (seed this with sample data).

3. Edit their own profile information (not their student ID, and not other students’ data).

4. Log out, returning to the landing page.
A student must never be able to view another student’s data, whether in the same class or a
different one.

Part C: Staff Dashboard and Class Scoped Access (35 marks)
This is the core of the exam. A logged in staff member should be able to:
11. View a list of only the students in the class they are assigned to teach.
2. View and edit grades/scores for only the students in their assigned class.
3. Attempt to access another class’s data must be blocked, whether through the UI or by
directly manipulating identifiers (e.g. changing a class ID in a URL, form, or localStorage
key). Your code must actively check the logged in staff member’s assigned class before
returning any student record, not just hide the button in the UI.
4. Log out, returning to the landing page.
To be marked correctly on this section, you must demonstrate (in a short comment or console
log is fine) the specific point in your code where access is checked and denied for out of class
data.
Part D: D