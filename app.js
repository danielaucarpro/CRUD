//importing core modules
const express = require('express');
const pug = require('pug');
const path = require('path');
const fs = require('fs');

//creating app reference
const app = express();

//empty array to store new users
const users = [];

//setting express to use pug processor and using pug files inside views folder
app.set('view engine', 'pug');
app.set('views', 'views');

//CRUD

//create
app.get('/', (req, res, next) => {
    res.render('create', {database: users});
});

//read
app.get('/read', (req, res, next) => {
    res.send(req.body);
});

//update
app.put('/update');

//delete
app.delete('/delete');

app.use((req, res, next) => {
    res.status(404).send('<center><h1>404 PAGE NOT FOUND</h1></center>');
});

const port = 4200;
app.listen(port);