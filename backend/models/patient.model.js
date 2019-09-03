const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength:1, unique:true},
    address:{type:String},
    number:{type:Number, minlength:10,maxlength:10, required:true}
});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;