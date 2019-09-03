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
            selectedDate: ''
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
        axios.get('http://localhost:5000/patients')
            .then(res=>{
                this.setState({patients:res.data, patient:res.data[0].name});
            })
        axios.get('http://localhost:5000/appointments')
            .then(res=>{
                this.setState({doctorappointments:res.data});
            })
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
        axios.post('http://localhost:5000/appointments/add',appointment)
            .then(res=>console.log(res.data));
        console.log(appointment);
    }

    getPatients(){
        return(
        <select name="patient" onChange={this.onChangePatient}>
        {this.state.patients.map(patient=>{
            return <option key={patient.name} value={patient.name}>{patient.name}</option>
        })}
        </select>
            )
    }

    getList(){
        return(
            <div>
                {this.state.doctorappointments.map(doctorappointment=>{
                    if(doctorappointment.doctor===this.state.doctor && doctorappointment.date.substring(0,10) === this.state.selectedDate)
                        return(
                            <p key={doctorappointment._id}>{doctorappointment.patient}  {doctorappointment.doctor}  {doctorappointment.date.substring(0,10)}  {doctorappointment.time}<br /></p>
                        );
                })}
            </div>
        )
    }

    render() { 
        return(
            <div>
            <form onSubmit={this.onSubmit}>
                Patient:
                {this.getPatients()}
                
                <br />Doctor:<input type="text" name="doctor" onChange={this.onChangeDoctor}></input><br/>
                Date:<DatePicker value={this.state.date} name = "date" onChange={this.onChangeDate}/><br />
                Time:<input type="text" onChange={this.onChangeTime}></input><br />
                <input type="submit"></input>
            </form>
                {this.getList()}
            </div>
        );
    }
}
 
export default AddAppointment;