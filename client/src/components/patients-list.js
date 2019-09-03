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
    render() { 
        return (
            <div>
                {this.state.patients.map(patient=>{
                    return <p>{patient.name}  {patient.number}  {patient.address}</p>
                })}
            </div>
        );
    }
}
 
export default PatientList;