import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops'

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
            <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >{props=>
            <div className="container-fluid" style={props}>
                <h2>Patients</h2>
                <Link to="/addpatient"><button className="btn btn-success">Add Patient</button></Link>
                <table class="table table-striped text-center">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.patients.map(patient=>{
                        return(
                            <tr key={patient._id}>
                                <td>{patient.name}</td>  
                                <td>{patient.number}</td>
                                <td>{patient.address}</td>
                                <td><button className="btn btn-danger"onClick={()=>this.delete(patient._id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>}
            </Spring>
        );
    }
}
 
export default PatientList;