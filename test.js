const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const uri = 'url of mongodb';
const DBName = 'test';
const client = new MongoClient(uri,{});
const mongoose = require('mongoose');
// import {Product} from './product.schema';
const Product = require('./product.schema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://arunkumar2076:GKpT8bq5xnDuu9Yx@cluster0.bhlpdo9.mongodb.net/test',{
    useNewurlParser: true,
    useFindAndmodify:true,
}).then(()=> {
    console.log('db is connected.');
})

app.get('/', (req, res) =>{
    res.send('Hello ');
})

app.post('/', async (req, res)=>{
    const data = req.body;

    for (let i = 0; i < data.length; i++) {
        await Product.create(data[i]);
    }
})


app.listen(3003, ()=>{
    console.log('server is start listing');
})
