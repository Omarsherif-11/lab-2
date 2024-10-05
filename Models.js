const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name: { type: String, required: true, default: 'New Product'},

    price: {type: Number, required: true, default: 0},

    stock: {type: Number, required: true, default: 0}

 });

const UserSchema = new mongoose.Schema({

    name: {type: String, required: true},

    type: {type: String, required: true},

    shoppingCart: {type: Array, required: true, default: []}

})


module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Product', ProductSchema);