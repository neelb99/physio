import React, {useState,useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import {Spring} from 'react-spring/renderprops';

const AddAppointment = ()=>{
    const today = new Date();
    const [patients,setPatients] = useState([]);
    const [doctors,setDoctors] = useState([]);
    const [date,setDate] = useState(today.getFullYear().toString()+'-'+('0'+(today.getMonth()+1).toString()).slice(-2)+'-'+('0'+today.getDate().toString()).slice(-2));
    const [calDate,setCalDate] = useState(new Date());
    const [patient,setPatient] = useState('');
    const [doctor,setDoctor] = useState('');
    const [time,setTime] = useState('');
    const [appointments,setAppointments] = useState([]);
    useEffect(()=>{
        axios.get('/api/doctors')
            .then(res=>{setDoctors(res.data); (res.data.length>0)?setDoctor(res.data[0].name):setDoctor(null)});
        axios.get('/api/patients')
            .then(res=>{setPatients(res.data); (res.data.length>0)?setPatient(res.data[0].name):setPatient(null)});
    },[]);

    useEffect(()=>{
        axios.get('/api/appointments')
            .then(res=>setAppointments(res.data.filter(app=>app.doctor===doctor && app.date===date)));
    },[doctor,date]);

    const handleDateChange = paramDate=>{
        setCalDate(paramDate);
        const stringDate = paramDate.getFullYear().toString()+'-'+('0'+(paramDate.getMonth()+1).toString()).slice(-2)+'-'+('0'+paramDate.getDate().toString()).slice(-2);
        setDate(stringDate);
    }
    const handlePatientChange = e=>setPatient(e.target.value);
    const handleDoctorChange = e=>setDoctor(e.target.value);
    const handleTimeChange = e=>setTime(e.target.value);
    const handleSubmit = e=>{
        e.preventDefault();
        const newAppointment ={
            doctor:doctor,
            patient: patient,
            date:date,
            time:time
        }
        axios.post('/api/appointments/add',newAppointment)
            .then(()=>window.location='/appointments');
    }
    const patientSelect = ()=>{
        return(
            <select className="form-control" name="patient" onChange={handlePatientChange}>
            {patients.map(pat=>{
                return <option key={pat._id} value={pat.name}>{pat.name}</option>
            })}
            </select>
        );
    }
    const doctorSelect = ()=>{
        return(
            <select className="form-control" name="doctor" onChange={handleDoctorChange}>
            {doctors.map(doc=>{
                return <option key={doc._id} value={doc.name}>{doc.name}</option>
            })}
            </select>
        );
    }
    const appointmentList = ()=>{
        return(
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Patient</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(app=>{
                            return(
                                <tr key={app._id}>
                                    <td>{app.patient}</td>  
                                    <td>{app.time}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        );
    }
    
    return(
        <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >
            {props=>
                <div className="container-fluid" style={props}>
                    <h2>Add Appointment</h2>
                    <DatePicker value={calDate} name = "date" onChange={handleDateChange}/>
                    <form onSubmit={handleSubmit} className="text-center">
                        <div className="form-group">
                            <label>Patient</label>
                            {patientSelect()}
                        </div> 
                        <div className="form-group">
                            <label>Doctor</label>
                            {doctorSelect()}
                        </div> 
                        <input placeholder="Time" className="form-control" type="text" onChange={handleTimeChange}></input>
                        <input type="submit" className="btn btn-primary"></input>
                    </form>
                    {appointmentList()}
                </div>}
            </Spring>
    );

}

export default AddAppointment;