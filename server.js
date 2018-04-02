<<<<<<< HEAD
// dependencies

var express = require("express");
var method = require("method-override");
var body = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var port = process.env.PORT || 3000;

// app set-ups

app.use(express.static("public"));
app.use(body.urlencoded({extended: false}));
app.use(method("_method"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/burgers_controller")(app);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("Connected to port " + port);
	});
});
=======
// require these npm packages 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 8090;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});


//`mysql -u root < schema.sql`
//`mysql -u root < seeds.sql`
//`mysql -u root -P < schema.sql`

//`mysql -u root -p --port 8889 -h 127.0.0.1 < schema.sql`
>>>>>>> de6ebb82cbe70ec5cef74df0849013e049af00e2
