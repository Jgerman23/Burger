var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response){
    burger.all(function(data){
        var info = {
            burgers: data 
        };
        response.render("index", info);
    });
});

router.post("api/burgers", function(request, response){
    burger.add(request.body.burger_name, function(result){
        response.json({id: result.insertId});
    });
});

router.put("api/burgers/:id", function(request, response){
    burger.update(request.params.id, function(result){
        response.json(result);
    });
});

module.exports = router;