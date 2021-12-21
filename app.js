const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

//import route
const postRoute = require('./routes/posts');

//middleware
app.use('/posts', postRoute);
//route

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/posts', (req, res) => {
    res.send("post route");
})

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true },
    () => console.log('connected to database')
);

//listening in port
app.listen(3000);