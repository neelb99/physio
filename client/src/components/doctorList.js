import React, { Component } from 'react';
import axios from 'axios';

class DoctorList extends Component {
    constructor(props){
        super(props);
        this.state = {
            doctors:[]
        }
        this.getList = this.getList.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/doctors')
            .then(res=>{
                this.setState({doctors:res.data});
                
            })
    }

    getList(){
       
        return(
            <div>
                {this.state.doctors.map(doctor=>{
                    return <p>{doctor.name}   {doctor.number}<br /></p>
                })}
            </div>
        );
    }

    render() { 
        return (
            <div>
            {this.getList()}
            </div>
          );
    }
}
 
export default DoctorList;