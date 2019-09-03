import React, { Component } from 'react';
import axios from 'axios';

class ViewDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            doctorname:''
        }
        this.getName = this.getName.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }

  
    

    render() { 
        return <h1></h1>;
    }
}
 
export default ViewDoctor;