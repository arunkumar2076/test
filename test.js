const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./product.schema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const DBstring = ""
mongoose.connect(DBstring, {
    useNewurlParser: true,
}).then(() => {
    console.log('db is connected.');
})
app.get('/', (req, res) => {
    res.send('Hello ');
})
app.post('/', async (req, res) => {
    const data = req.body;
    for (let i = 0; i < data.length; i++) {
        await Product.create(data[i]);
    }
    res.status(201).send('Success');
})

app.listen(3003, () => {
    console.log('server is start listing');
})
