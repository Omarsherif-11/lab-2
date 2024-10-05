const express = require('express');

const mongoose = require('mongoose');

const prodRouter = require('../lab 2/ProductRouter')

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const url = 'mongodb://localhost:27017/Shopping';

mongoose.connect(url, {

    useNewUrlParser: true, 

    //useUnifiedTopolgy: true

}).then(console.log('Connected To the DB')).catch(err => console.log(err.message));

app.use('/products', prodRouter);

app.listen(3000);
