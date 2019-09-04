const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient:{type:String, required:true},
    doctor:{type:String,required:true},
    date:{type:String, required:true},
    time:{type:String, required:true}
})

const appointment = mongoose.model('appointment',appointmentSchema);

module.exports = appointment;