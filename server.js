const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const {QuoteModel} = require('./server/models/userModel');
const port = 8000;
const bodyParser = require('body-parser');
const flash=require('express-flash');
const session = require('express-session');
app.use(flash());
const{QuoteRouter}=require('./server/routes/quoteRouter');
require('./server/config/database');
//app.use(express.static(path.join(__dirname, "/client/static")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
  }))


app.set('views',__dirname+ '/client/views');

app.set('view engine', 'ejs');

app.use('/quotes',QuoteRouter);


app.listen(port);