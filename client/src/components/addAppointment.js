import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';


class AddAppointment extends Component {
    constructor(props){
        super(props);
        this.state = {
            patient: '',
            doctor: '',
            date: new Date(),
            time: '',
            patients: [],
            doctorappointments: [],
            selectedDate: '',
            doctors: []
        }
        this.onChangePatient = this.onChangePatient.bind(this);
        this.onChangeDoctor = this.onChangeDoctor.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getList = this.getList.bind(this);
    }

    componentDidMount(){
        this.setState({selectedDate:(this.state.date.getFullYear().toString() + '-'+ ('0'+(this.state.date.getMonth()+1).toString()).slice(-2) + '-'+('0'+this.state.date.getDate().toString()).slice(-2))});
        axios.get('/api/patients')
            .then(res=>{
                const patientlist=res.data;
                const firstpatientname = (res.data.length>0)?res.data[0].name:null;
                this.setState({patients:patientlist,patient:firstpatientname})
            })
        axios.get('/api/appointments')
            .then(res=>{
                this.setState({doctorappointments:res.data});
            })
        axios.get('/api/doctors')
            .then(res=>{
                const doctorlist=res.data;
                const firstdocname = (res.data.length>0)?res.data[0].name:null;
                this.setState({doctors:doctorlist,doctor:firstdocname})
            });
        
    }

    onChangePatient(e){
        this.setState({patient:e.target.value})
    }

    onChangeDoctor(e){
        this.setState({doctor:e.target.value})
    }

    onChangeDate(date){
        this.setState({date:date, selectedDate:(date.getFullYear().toString() + '-'+ ('0'+(date.getMonth()+1).toString()).slice(-2) + '-'+('0'+date.getDate().toString()).slice(-2))})
    }

    onChangeTime(e){
        this.setState({time:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const appointment = {
            patient: this.state.patient,
            doctor: this.state.doctor,
            date: this.state.date,
            time: this.state.time
        };
        axios.post('/api/appointments/add',appointment)
            .then(res=>console.log(res.data));
        console.log(appointment);
    }

    getPatients(){
        return(
        <select className="form-control">name="patient" onChange={this.onChangePatient}>
        {this.state.patients.map(patient=>{
            return <option key={patient.name} value={patient.name}>{patient.name}</option>
        })}
        </select>
            )
    }

    getDoctors(){
        return(
            <select className="form-control" name="doctor" onChange={this.onChangeDoctor}>
                {this.state.doctors.map(doctor=>{
                    return <option key={doctor._id} value={doctor.name}>{doctor.name}</option>
                })}
            </select>
        );
    }

    getList(){
        return(
            <table class="table table-striped text-center">
                <thead>
                <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Time</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.doctorappointments.map(appointment=>{
                        if(appointment.doctor===this.state.doctor && appointment.date.substring(0,10) === this.state.selectedDate)
                            return(
                                <tr key={appointment._id}>
                                    <td>{appointment.patient}</td>  
                                    <td>{appointment.time}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        )
    }

    render() { 
        return(
            <div className="container-fluid">
                <h2>Add Appointment</h2>
                <DatePicker value={this.state.date} name = "date" onChange={this.onChangeDate}/>
                <form onSubmit={this.onSubmit} className="text-center">
                    <div className="form-group">
                        <label for="patient">Patient</label>
                        {this.getPatients()}
                    </div> 
                    <div className="form-group">
                        <label for="doctor">Doctor</label>
                        {this.getDoctors()}
                    </div> 
                    
                    <input placeholder="Time" className="form-control" type="text" onChange={this.onChangeTime}></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
                
                {this.getList()}
            </div>
        );
    }
}
 
export default AddAppointment;