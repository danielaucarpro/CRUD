//importing core modules
const express = require('express');
const pug = require('pug');
const path = require('path');
const fs = require('fs');

const app = express();

const database = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

//CRUD

//create
app.post('/', (req, res, next)=>{
    res.render('create');
});

//read
app.get();

//update
app.put();

//delete
app.delete();

const port = 4200;
app.listen(port);