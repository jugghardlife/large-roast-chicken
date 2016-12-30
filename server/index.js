const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/large-roast-chicken');

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function() {
  console.log('success!')
});

routes(app);
app.listen(3000, function(err) {
  console.log('Listening at http://localhost:3000');
});
