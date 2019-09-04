import React, { Component } from 'react';
import axios from 'axios';

class PatientList extends Component {
    constructor(props){
        super(props);
        this.state = {
            patients: []
        }
    }
    componentDidMount(){
        axios.get('/api/patients')
            .then(res=>this.setState({patients:res.data}));
    }

    delete(id){
        axios.get('/api/patients/delete/'+id)
        .then(res=>{
            this.setState({patients:this.state.patients.filter(pat=> pat._id!==id)})
        });
    }

    render() { 
        return (
            <div>
                {this.state.patients.map(patient=>{
                    return <p key={patient._id}>{patient.name}  {patient.number}  {patient.address}<button onClick={()=>this.delete(patient._id)}>Delete</button></p>
                })}
            </div>
        );
    }
}
 
export default PatientList;