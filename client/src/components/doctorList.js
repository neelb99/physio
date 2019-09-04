import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Spring} from 'react-spring/renderprops';

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
            .then(res=>{
                this.setState({doctors:this.state.doctors.filter(doc=> doc._id!==id)})
            });
    }

     getList(){
       
        return(
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">View</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.doctors.map(doctor=>{
                    return(
                        
                        <tr key={doctor._id} >
                            <td>{doctor.name}</td>  
                            <td>{doctor.number}</td>
                            <td><Link to={'/doctors/view/'+doctor._id} params={{id:doctor._id}}><button className="btn btn-primary">View</button></Link></td>
                            <td><button className="btn btn-danger"onClick={()=>this.delete(doctor._id)}>Delete</button></td>
                        </tr>
                        
                    );
                })}
                </tbody>
            </table>
        );
    }

    

    render() { 
        return (
            <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >{props=>
            <div className="container-fluid" style={props}>
            <h2>Doctors</h2>
            <Link to="/adddoctor"><button className="btn btn-success">Add Doctor</button></Link>
            {this.getList()}
            </div>}
            </Spring>
          );
    }
}
 
export default DoctorList;