const express = require("express");
const app = express();
const path = require("path");
const db = require("./config/mongoose");

app.use(express.urlencoded());
app.use(express.static('./views'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use( function(req,res, next){
  res.locals.req = req; 
  next();
});

app.use('/',require('./routes'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log('Listening for requests now');
});
