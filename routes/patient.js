const router = require('express').Router();
let patient = require('../models/patient.model')

router.route('/').get((req,res)=>{
    patient.find()
        .then(patients=>res.json(patients));
});

router.route('/:id').get((req,res)=>{
    patient.findById(req.params.id)
        .then(foundpatient=>res.json(foundpatient));
});

router.route('/delete/:id').get((req,res)=>{
    patient.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Deleted"))
})

router.route('/add').post((req,res)=>
{
    const name = req.body.name;
    const number = req.body.number;
    const address = req.body.address;
    const newPatient = patient({name,address,number});
    newPatient.save()
        .then(()=>res.json("Patient added"));
})

module.exports = router;