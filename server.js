// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/'});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});





// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/myAction', upload.single('myFile'), function (req, res) {
  console.log("triggered!");
  res.send({ "size" : req.file.size });
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
