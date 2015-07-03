var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var abstractCBMatrix = require('./abstractCBMatrix.js');

app.set('port', (process.env.PORT || '3000'));
app.set('views', path.join(__dirname, './ejs'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

function abstractCB(callback) {
  abstractCBMatrix(false, function (matrix) {
    callback(matrix);
  });
}

app.get('/', function (req, res, next) {
  abstractCB(function (matrix) {
    res.render('template', { 
      title: 'abstract-common-blockchain-test-matrix',
      matrix: JSON.stringify(matrix)
    });
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
