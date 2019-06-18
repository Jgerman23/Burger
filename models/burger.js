var orm = require("../config/orm.js");

var burger = {
    all: function(callBack){
        orm.selectAll("burgers", function(response){
            callBack(response);
            console.log(response);
        });
    },
    add: function(value, callBack){
        orm.insertOne("burgers", "burger_name", value, function(response){
            callBack(response);
        });
    },
    update: function(eatenId, callBack){
        orm.updateOne("burgers", "devoured", 1, "id", eatenId, function(response){
            callBack(response);
        });
    }
};

module.exports = burger;