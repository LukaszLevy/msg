// express

// const, require
require('dotenv').config();
const bodyParser = require('body-parser')
const express = require("express");
const serveStatic = require('serve-static');
const app = express();
const port = process.env.PORT || 5000;
const getdb = require('./mongo');
// use
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require("body-parser").json());
app.use(serveStatic('Public', { 'index': ['index.html', 'index.htm'] }))

// get
app.get('/db', async function(req, res){
   getdb.get_db(req, res);
})

app.post('/db', async function(req, res){
    getdb.add_to_db(req, res);
 })

// listen
app.listen(port, () => {
  console.log(`Dziłający port ${port}!`);
});
