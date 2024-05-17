const express = require('express');
const morgan = require('morgan');
const movieRouter = require('./employee'); 
const cors = require('cors');
const mysql = require('mysql2');
require("dotenv").config()

const app = express(); 
app.use(cors())
app.use(express.static('public'));
app.use(morgan('common', { immediate: true }));
app.use(express.urlencoded({ extended: false }));
app.use('/employee', movieRouter);
app.get('/', (request, response) => response.redirect('/employee'));
app.listen(process.env.PORT || 4000 ,() => { 
    console.log('Server is listening to http://localhost:4000'); });