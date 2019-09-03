const router = require('express').Router();
let appointment = require('../models/appointment.model');

router.route('/').get((req,res)=>{
    appointment.find()
        .then(appointments=>res.json(appointments));
})

router.route('/:id').get((req,res)=>{
    appointment.findById(req.params.id)
        .then(foundappointment=>res.json(foundappointment));
});

router.route('/add').post((req,res)=>{
    const patient = req.body.patient;
    const doctor = req.body.doctor;
    const date = req.body.date;
    const time = req.body.time;
    const newAppointment = appointment({patient,doctor,date,time});
    newAppointment.save()
        .then(()=>res.json("Appointment created"));
})

module.exports = router;