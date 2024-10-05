const express = require('express');

const Product = require('../lab 2/Models'); 

const router = express.Router();

router.get('/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const product = await Product.findById(id);
    
        res.status(200).json(product);

    }catch(err){

        res.status(400).json(err.message);

    }
})

router.post('/', async (req, res) => {

    try {

        const {name, price, stock} = req.body;

        const result = await Product.create({name, price, stock});

        res.status(200).json(result);

        
    }catch(err){

        res.status(400).json(err.message);

    }
})

module.exports = router;