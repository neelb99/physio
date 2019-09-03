import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className ="navbar-nav">
                    <Link to='/' className="navbar-brand">Home</Link>
                    <Link to='/appointments' className="nav-item nav-link">Appointments</Link>
                    <Link to='/patients' className="nav-link nav-item">Patients</Link>
                    <Link to='/addpatient' className="nav-link nav-item" >Add Patient</Link> 
                    <Link to='/addappointment' className="nav-link nav-item" >Add Appointment</Link> 
                    <Link to='/adddoctor' className="nav-link nav-item" >Add Doctor</Link> 
                    <Link to='/doctors' className="nav-link nav-item" >Doctors</Link> 
                </div>
            </nav>
        );
    }
}
 
export default Navbar;