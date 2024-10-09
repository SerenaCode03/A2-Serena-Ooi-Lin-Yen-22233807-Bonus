module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/users/", users.create);

    router.get("/users/", users.findAll);

    router.get("/users/:user_id", users.findOne);

    router.put("/users/:user_id", users.update);
    
    router.delete("/users/:user_id", users.delete);

    app.use('/api', router);

}