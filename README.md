# 1. Database Creation
* There will be 3 tables in the database, namely 'users', 'categories' and 'habits'
![database design](image/databasedesign.png)
* A user can create zero or more category. Each category belongs to exactly one user, and this is established through a foreign key relationship (user_id) in the categories table, referencing the user_id in the users table. This defines a one-to-many relationship from users to categories. 
* A user can have zero or more habits. Each habit is associated with exactly one user, as indicated by the user_id in the habits table, which references the user_id in the users table. This creates a one-to-many relationship from users to habits.
* A category can contain zero or more habit. Each habit belongs to a specific category, indicated by the category_id in the habits table, referencing the category_id in the categories table. This forms another one-to-many relationship from categories to habits.
* The habits table has two foreign keys (user_id and category_id) that together ensure each habit is associated with both a specific user and a specific category.

**a. users table**
* The table contains attributes such as user_id, username, email and password. createdAt and updatedAt are 
automatically created by Sequelize. The primary key of 'users' table is user_id

![users table](image/Screenshot%202024-10-09%20152251.png)

* Files involved: `user.model.js`, `user.controller.js`, `users.routes.js`

**b. categories table**
* The table contains attributes such as category_id, category_name and user_id. The primary key is category_id 
whereas the user_id acts as the foreign key

![categories table](image/Screenshot%202024-10-09%20155458.png)

* Files involved: `category.model.js`, `category.controller.js`, `categories.routes.js`

**c. habits table**
* The table contains attributes such as habit_id, habit_desc, habit_status, category_id and user_id. The primary key 
is habit_id whereas the user_id and category_id act as the foreign keys

![habits table](image/Screenshot%202024-10-09%20162402.png)

* Files involved: `habit.model.js`, `habit.controller.js`, `habits.routes.js`

# 2. API Implementation

**a. Create user**
* Command: http POST http://localhost/api/users username='Serena03' email='serena@gmail.com' password='hello2003'
* A new user with username "Serena03", email 'serena@gmail.com', password 'hello2003' is created

![create user API](image/Screenshot%202024-10-09%20170740.png)

* For better illustration purposes in c and d, another 2 new users are created
![extra user](image/Screenshot%202024-10-09%20171030.png)
![extra user](image/Screenshot%202024-10-09%20171255.png)

**b. Update user**
* Command: http PUT http://localhost/api/users/1 username='Serena' password='hello2024'
* Changes are made in the user information with user_id = 1, the username is updated from 'Serena03' to 'Serena' and the password is updated from 'hello2003' to 'hello2024'

![Updated user](image/Screenshot%202024-10-09%20170905.png)

* Ensure the changes made is updated by retrieveing the user with user_id 1:
![Updated user](image/Screenshot%202024-10-09%20172216.png)

**c. Get user**
* Command: http GET http://localhost/api/users
* Retrieves all users

![Get all users](image/Screenshot%202024-10-09%20171328.png)

**d. Delete user**
* Command: http DELETE http://localhost/api/users/2
* The user with user_id 2 is deleted

![Delete user](image/Screenshot%202024-10-09%20171414.png)

* Only users with user_id 1 and 3 are in the retrieval output, user with user_id 2 has been successfully deleted
![Double check deleted user](image/Screenshot%202024-10-09%20171443.png)

**e. Create category**

**f. Update category**

**g. Get category**

**h. Delete category**

**i. Create habit**

**j. Update habit**

**k. Get habit**

**l. Delete habit**