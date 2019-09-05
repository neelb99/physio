import React, {useState,useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops'

const AppointmentList = ()=>{
    const today = new Date();
    const [appointments,setAppointments] = useState([]);
    const [date,setDate] = useState(today.getFullYear().toString()+'-'+('0'+(today.getMonth()+1).toString()).slice(-2)+'-'+('0'+today.getDate().toString()).slice(-2));
    const [calDate,setCalDate] = useState(new Date());
    
    useEffect(()=>{
        axios.get('/api/appointments')
            .then(res=>setAppointments(res.data.filter(app=>app.date===date)));
    },[date])

    const handleDateChange = paramDate=>{
        setCalDate(paramDate);
        const stringDate = paramDate.getFullYear().toString()+'-'+('0'+(paramDate.getMonth()+1).toString()).slice(-2)+'-'+('0'+paramDate.getDate().toString()).slice(-2);
        setDate(stringDate);
    }

    const deleteAppointment = id=>{
        axios.get('/api/appointments/delete/'+id)
            .then(()=>setAppointments(appointments.filter(app=>app._id!==id)));
    }

    const getAppointments = ()=>{
        return(
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Patient</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Time</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                {appointments.map(appointment=>{
                    return(
                        <tr key={appointment._id}>
                            <td>{appointment.patient}</td>  
                            <td>{appointment.doctor}</td>
                            <td>{appointment.time}</td>
                            <td><button className="btn btn-danger"onClick={()=>deleteAppointment(appointment._id)}>Cancel</button></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
    return (
        <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >
            {props=>
                <div className="container-fluid-date" style={props}>
                    <h2>Appointments</h2>
                    <Link to="/addappointment"><button className="btn btn-success">New Appointment</button></Link>
                    <DatePicker value={calDate} onChange={handleDateChange} />
                    {getAppointments()}
                </div>
            }
        </Spring>
    );
}

export default AppointmentList;