import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';


class AppointmentList extends Component {

    style = {
        display: 'none'
    }

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
        axios.get('/appointments')
            .then(res=>{
                this.setState({appointments:res.data})
            })
    }

    updateDate(date){
        this.setState({date:(date.getFullYear().toString() + '-'+ ('0'+(date.getMonth()+1).toString()).slice(-2) + '-'+('0'+date.getDate().toString()).slice(-2)), caldate:date});
    }

    getAppointments(){
        return(
        <div>
        {this.state.appointments.map(appointment=>{
            if(this.state.date === appointment.date.substring(0,10))
            return(
                <p key={appointment._id}>{appointment.patient}  {appointment.doctor}  {appointment.date.substring(0,10)}  {appointment.time}<br /></p>
                
            );
        })}
        </div>
        );
    }

    render() { 
        return (
            <div>
            <DatePicker value={this.state.caldate} onChange={this.updateDate} />
            {this.getAppointments()}
            </div>
        );
    }
}
 
export default AppointmentList;