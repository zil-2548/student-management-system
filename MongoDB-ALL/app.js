// noinspection JSCheckFunctionSignatures

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var couersRouter= require('./routes/couers');
var AdmRouter= require('./routes/ADM');
var LoginRoter=require('./routes/Login');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
let corsOptions = {
  origin : ['http://localhost:4200','http://localhost:54559','http://localhost:52260'],
}

app.use(cors(corsOptions))


app.options('*',cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/couers', couersRouter);
app.use('/adm',AdmRouter);
app.use('/login',LoginRoter);












// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
