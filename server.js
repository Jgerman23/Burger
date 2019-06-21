var express = require("express");
var exphbs = require("express-handlebars");
var body_parser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT, function(){
    console.log("Listening on: http://localhost:" + PORT);
});
