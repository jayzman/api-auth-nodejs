const express = require("express");
const bodyParser = require("body-parser");
 
global.__basedir = __dirname;

const app = express();

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.static('resources'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/config/db.config");
require('./app/routers/auth.routes')(app);
require('./app/routers/user.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Zo application." });
});

db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});