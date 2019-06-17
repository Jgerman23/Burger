var connection = require("../config/connection.js");


var orm = {
    selectAll: function(tableInput, callBack){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function(tableInput, colName, value, callBack){
        value = connection.escape(value);
        var queryString = "INSERY INTO " + tableInput + "(" + colName + ") VALUES (" + value + ");";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            callBack(result);
        });
    },
    updateOne: function (tableInput, colName, value, idColName, id, callBack){
        var queryString = "UPDATE " + tableInput + " SET " + colName + " = " + value + " WHERE " + idColName + " = " + id + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callBack(result);
        });
    }   
}
    

module.exports = orm;