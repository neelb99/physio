import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';

const PatientList = ()=>{
    const [patients,setPatients] = useState([]);
    useEffect(()=>{
        axios.get('/api/patients')
            .then(res=>setPatients(res.data));
    },[])
    const deletePatient = id=>{
        axios.get('/api/patients/delete/'+id)
            .then(()=>setPatients(patients.filter(patient=>patient._id!==id)));
    }
    const getList = ()=>{
        return(
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {patients.map(patient=>{
                    return(
                        <tr key={patient._id}>
                            <td>{patient.name}</td>  
                            <td>{patient.number}</td>
                            <td><button className="btn btn-danger"onClick={()=>deletePatient(patient._id)}>Delete</button></td>
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
                <div className="container-fluid" style={props}>
                    <h2>Patients</h2>
                    <Link to="/addpatient"><button className="btn btn-success">Add Patient</button></Link>
                    {getList()}
                </div>
            }
        </Spring>
    );
}

export default PatientList;