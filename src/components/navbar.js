import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className ="navbar-nav">
                    <Link to='/' className="navbar-brand">Navbar</Link>
                    <Link to='/' className="nav-item nav-link">Home</Link>
                    <Link to='/patients' className="nav-link nav-item">Patients</Link>
                    <Link to='/addpatient' className="nav-link nav-item" >Add Patient</Link> 
                </div>
            </nav>
        );
    }
}
 
export default Navbar;