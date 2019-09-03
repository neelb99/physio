const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRouter = require('./routes/patient')
const appointmentRouter = require('./routes/appointment');
const doctorRouter = require('./routes/doctor');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>console.log("DB connected"));

app.use('/patients',patientRouter);
app.use('/appointments',appointmentRouter);
app.use('/doctors',doctorRouter);

app.listen(PORT,()=>console.log("Server is Running"));