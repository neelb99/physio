const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>console.log("DB connected"));

app.listen(PORT,()=>console.log("Server is Running"));