var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const trending = require('trending-github');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.get('/repos/:lenguaje', (req, res) => {
  
  trending('weekly', req.params.lenguaje)
  .then(repos => res.json(repos));
  
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'));
});
// error handler
// error handlers
// development error handler
// will print stacktrace


module.exports = app;
