import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';

const DoctorList = ()=>{
    const [doctors,setDoctors] = useState([]);
    useEffect(()=>{
        axios.get('/api/doctors')
            .then(res=>setDoctors(res.data));
    },[])
    const deleteDoc = id=>{
        axios.get('/api/doctors/delete/'+id)
            .then(()=>setDoctors(doctors.filter(doc=>doc._id!==id)))
    }
    const getList = ()=>{
        return(
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">View</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map(doctor=>{
                        return(
                            <tr key={doctor._id}>
                                <td>{doctor.name}</td>  
                                <td>{doctor.number}</td>
                                <td><Link to={'/doctors/view/'+doctor._id} params={{id:doctor._id}}><button className="btn btn-primary">View</button></Link></td>
                                <td><button className="btn btn-danger"onClick={()=>deleteDoc(doctor._id)}>Delete</button></td>
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
                    <h2>Doctors</h2>
                    <Link to="/adddoctor"><button className="btn btn-success">Add Doctor</button></Link>
                    {getList()}
                </div>
            }
        </Spring>
    );
}

export default DoctorList;