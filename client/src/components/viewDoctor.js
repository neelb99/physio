import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import {Spring} from 'react-spring/renderprops';

class ViewDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            doctorid:this.props.location.pathname.substring(14),
            appointments: [],
            doctor:{},
            date:'',
            caldate:new Date()
        }
        this.updateDate = this.updateDate.bind(this);
        
    }

    componentDidMount(){
        this.setState({date:(this.state.caldate.getFullYear().toString() + '-'+ ('0'+(this.state.caldate.getMonth()+1).toString()).slice(-2) + '-'+('0'+this.state.caldate.getDate().toString()).slice(-2))});
        this.getDoctor();
        axios.get('/api/appointments')
            .then(res=>{
                this.setState({appointments:res.data});
            })
        this.getList()
    }

    updateDate(date){
        this.setState({date:(date.getFullYear().toString() + '-'+ ('0'+(date.getMonth()+1).toString()).slice(-2) + '-'+('0'+date.getDate().toString()).slice(-2)), caldate:date});
    }

    getDoctor(){
        axios.get('/api/doctors/view/'+this.state.doctorid)
            .then(res=>{
                this.setState({doctor:res.data})
                console.log(this.state.doctor);
            })
    }

    delete(id){
        axios.get('/api/appointments/delete/'+id)
        .then(res=>{
            this.setState({appointments:this.state.appointments.filter(app=> app._id!==id)})
        });
    }


    getList(){
        return(
            
            <table className="table table-striped text-center">
                <thead>
                <tr>
                    <th scope="col">Patient</th>
                    <th scope="col">Time</th>
                    <th scope="col">Cancel</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.appointments.map(appointment=>{
                        if(appointment.doctor===this.state.doctor.name && this.state.date === appointment.date)
                        return(
                            <tr key={appointment._id}>
                                <td>{appointment.patient}</td>  
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
            <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >{props=>
            <div className="container-fluid" style={props}>
            <h2>{this.state.doctor.name}</h2>
            <DatePicker value={this.state.caldate} onChange={this.updateDate} />
            {this.getList()}
        </div>}
        </Spring>
        );
    }
}
 
export default ViewDoctor;