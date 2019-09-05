import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to='/' className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/appointments' className="nav-item nav-link">Appointments</Link>
                    <Link to='/patients' className="nav-link nav-item">Patients</Link>
                    <Link to='/doctors' className="nav-link nav-item" >Doctors</Link> 
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;