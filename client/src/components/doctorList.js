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
        axios.get('/api/doctors')
            .then(res=>{
                this.setState({doctors:res.data});
                
            })
    }

    delete(id){
        console.log('/api/doctors/delete/'+id);
        axios.get('/api/doctors/delete/'+id)
            .then(res=>console.log(res.data));
    }

     getList(){
       
        return(
            <div>
                {this.state.doctors.map(doctor=>{
                    return <p key={doctor._id}>{doctor.name}   {doctor.number} <button onClick={()=>this.delete(doctor._id)}>Delete</button><br /></p>
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