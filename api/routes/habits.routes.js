module.exports = app => {
    const habits = require("../controllers/habit.controller.js");
  
    var router = require("express").Router();
  
    router.post("/users/:user_id/categories/:category_id/habits", habits.create);
  
    router.get("/users/:user_id/categories/:category_id/habits", habits.findAll);
  
    router.get("/users/:user_id/categories/:category_id/habits/:habit_id", habits.findOne);
  
    router.put("/users/:user_id/categories/:category_id/habits/:habit_id", habits.update);
  
    router.delete("/users/:user_id/categories/:category_id/habits/:habit_id", habits.delete);
  
    app.use('/api', router);
};