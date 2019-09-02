const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name:{type:String, required:true, minlength:1, unique:true},
    address:{type:String},
    number:{type:Number, minlength:10, required:true}
});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;