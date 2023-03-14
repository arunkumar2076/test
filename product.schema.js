const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productId :{
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    operation:{
        type: String,
        required: true,
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
