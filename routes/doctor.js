const router = require('express').Router();
const doctor = require('../models/doctor.model');

router.route('/').get((req,res)=>{
    doctor.find()
        .then(doctors=>res.json(doctors))
        .catch((err)=>console.log(err));
})

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const number = req.body.number;
    const newDoctor = doctor({name,number});
    newDoctor.save()
        .then(()=>res.json("Doctor Added"))
        .catch((err)=>console.log(err));
})



module.exports = router;