# 1. Database Creation
* There will be 3 tables in the database, namely 'users', 'categories' and 'habits'
![database design](image/databasedesign.png)
* A user can create more than one category. Each category belongs to exactly one user, and this is established through a foreign key relationship (user_id) in the categories table, referencing the user_id in the users table. This defines a one-to-many relationship from users to categories.
* A user can have more than one habits. Each habit is associated with exactly one user, as indicated by the user_id in the habits table, which references the user_id in the users table. This creates a one-to-many relationship from users to habits.
* A category can contain more than one habit. Each habit belongs to a specific category, indicated by the category_id in the habits table, referencing the category_id in the categories table. This forms another one-to-many relationship from categories to habits.
* The habits table has two foreign keys (user_id and category_id) that together ensure each habit is associated with both a specific user and a specific category.

**a. users table**
* The table contains attributes such as user_id, username, email and password. createdAt and updatedAt are automatically created by Sequelize. The primary key of 'users' table is user_id

![users table](image/Screenshot%202024-10-09%20152251.png)

* Files involved: `user.model.js`, `user.controller.js`, `useres.routes.js`


