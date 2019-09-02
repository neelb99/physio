import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className ="navbar-nav">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-link nav-item" href="#">Features</a>
                    <a className="nav-link nav-item" href="#">Pricing</a> 
                    <a className="nav-link nav-item" href="#">Disabled</a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;