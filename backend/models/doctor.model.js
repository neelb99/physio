const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    number:{type:Number, minlength:10, maxlength:10, required:true}
})

const doctor = mongoose.model('doctor',doctorSchema);

module.exports = doctor;