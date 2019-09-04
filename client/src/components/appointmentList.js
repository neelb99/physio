import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom';


class AppointmentList extends Component {

   constructor(props){
        super(props)
        this.state={
            appointments:[],
            date: '',
            caldate:new Date()
        }
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount(){
        this.setState({date:(this.state.caldate.getFullYear().toString() + '-'+ ('0'+(this.state.caldate.getMonth()+1).toString()).slice(-2) + '-'+('0'+this.state.caldate.getDate().toString()).slice(-2))});
        axios.get('/api/appointments')
            .then(res=>{
                this.setState({appointments:res.data})
            })
    }

    updateDate(date){
        this.setState({date:(date.getFullYear().toString() + '-'+ ('0'+(date.getMonth()+1).toString()).slice(-2) + '-'+('0'+date.getDate().toString()).slice(-2)), caldate:date});
    }

    delete(id){
        axios.get('/api/appointments/delete/'+id)
        .then(res=>{
            this.setState({appointments:this.state.appointments.filter(app=> app._id!==id)})
        });
    }

    getAppointments(){
        return(
        <table class="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Doctor</th>
                    <th scope="col">Time</th>
                    <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
            {this.state.appointments.map(appointment=>{
                if(this.state.date === appointment.date.substring(0,10))
                return(
                    <tr key={appointment._id}>
                        <td>{appointment.patient}</td>  
                        <td>{appointment.doctor}</td>
                        <td>{appointment.time}</td>
                        <td><button className="btn btn-danger"onClick={()=>this.delete(appointment._id)}>Cancel</button></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        );
    }

    render() { 
        return (
            <div className="container-fluid">
                <h2>Appointments</h2>
                <Link to="/addappointment"><button className="btn btn-success">New Appointment</button></Link>
                <DatePicker value={this.state.caldate} onChange={this.updateDate} />
                {this.getAppointments()}
            </div>
        );
    }
}
 
export default AppointmentList;