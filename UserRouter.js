const express = require('express');

const User = require('../lab 2/Models');

const router = express.Router();

app.get('/cart/:id', async(req, res) => {

    try {

        const id = req.params.id;

        const user = await User.findById(id);

        res.status(200).json(user.cart);


    }catch(err){

        res.status(400).json(err.message);

    }

})

app.post('/addToCart/:id/:productId', async(req, res) => {

    try {

        const id = req.params.id;

        const productId = req.params.productId;

        const user = await User.findById(id);

        const cart = user.cart;

        const product = await 

        cart.append(product);

        
    }catch(err){

        res.status(400).json(err.message);

    }

})