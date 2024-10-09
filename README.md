# 1. Database Creation
* There will be 3 tables in the database, namely 'users', 'categories' and 'habits'
![database design](image/databasedesign.png)
* A user can create zero or more category. Each category belongs to exactly one user, and this is established through a foreign key relationship (user_id) in the categories table, referencing the user_id in the users table. This defines a one-to-many relationship from users to categories. 
* A user can have zero or more habits. Each habit is associated with exactly one user, as indicated by the user_id in the habits table, which references the user_id in the users table. This creates a one-to-many relationship from users to habits.
* A category can contain zero or more habit. Each habit belongs to a specific category, indicated by the category_id in the habits table, referencing the category_id in the categories table. This forms another one-to-many relationship from categories to habits.
* The habits table has two foreign keys (user_id and category_id) that together ensure each habit is associated with both a specific user and a specific category.

**a. users table**
* The table contains attributes such as user_id, username, email and password. createdAt and updatedAt are automatically created by Sequelize. The primary key of 'users' table is user_id

![users table](image/Screenshot%202024-10-09%20152251.png)

* Files involved: `user.model.js`, `user.controller.js`, `users.routes.js`

**b. categories table**
* The table contains attributes such as category_id, category_name and user_id. The primary key is category_id whereas the user_id acts as the foreign key

![categories table](image/Screenshot%202024-10-09%20155458.png)

* Files involved: `category.model.js`, `category.controller.js`, `categories.routes.js`

**c. habits table**
* The table contains attributes such as habit_id, habit_desc, habit_status, category_id and user_id. The primary key is habit_id whereas the user_id and category_id act as the foreign keys

![habits table](image/Screenshot%202024-10-09%20162402.png)

* Files involved: `habit.model.js`, `habit.controller.js`, `habits.routes.js`

