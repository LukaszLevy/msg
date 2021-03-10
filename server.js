// express

// const, require
require('dotenv').config();
const express = require("express");
const serveStatic = require('serve-static');
const app = express();
const port = process.env.PORT || 5000;
// use
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(require("body-parser").json());
app.use(serveStatic('Public', { 'index': ['index.html', 'index.htm'] }))

// get
app.get('/w', async function(req, res){
    
})

// listen
app.listen(port, () => {
  console.log(`Dziłający port ${port}!`);
});
