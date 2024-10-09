module.exports = app => {
    const categories = require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    router.post("/users/:user_id/categories", categories.create);
  
    router.get("/users/:user_id/categories", categories.findAll);
  
    router.get("/users/:user_id/categories/:category_id", categories.findOne);
  
    router.put("/users/:user_id/categories/:category_id", categories.update);
  
    router.delete("/users/:user_id/categories/:category_id", categories.delete);
  
    app.use('/api', router);
};