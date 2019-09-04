import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to='/' className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/appointments' className="nav-item nav-link">Appointments</Link>
                        <Link to='/patients' className="nav-link nav-item">Patients</Link>
                        {/* <Link to='/addpatient' className="nav-link nav-item" >Add Patient</Link>  */}
                        {/* <Link to='/addappointment' className="nav-link nav-item" >Add Appointment</Link>  */}
                        {/* <Link to='/adddoctor' className="nav-link nav-item" >Add Doctor</Link>  */}
                        <Link to='/doctors' className="nav-link nav-item" >Doctors</Link> 
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;