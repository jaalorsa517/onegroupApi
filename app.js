const express = require('express');
const passport = require('passport');

const loginRouter = require('./routes/api/v1/login');
const signinRouter = require('./routes/api/v1/signin');
const productsRouter = require('./routes/api/v1/products');

require('./services/auth/bearerAuthenticated');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());

//Router
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/signin', signinRouter);
app.use('/api/v1/products', productsRouter);

module.exports = app;
