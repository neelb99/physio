import React, { Component } from 'react';
import axios from 'axios';

class AddPatient extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            number: 0,
            address: '',
            display:'none'
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e){
        this.setState({name:e.target.value})
    }

    onChangeAddress(e){
        this.setState({address:e.target.value})
    }

    onChangeNumber(e){
        this.setState({number:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const patient = {
            name: this.state.name,
            number:this.state.number,
            address:this.state.address
        };
        if(patient.number.length !==10){
            this.setState({display:'block'});
            return;
        }
        axios.post('/api/patients/add',patient)
            .then(res=>console.log(res.data));
        this.setState({name:'',number:0,address:''});
        window.location = '/patients';
    }

    render() { 
        return(
            <div className="container-fluid">
                <h2>Add Patient</h2>
                <p style={{display:this.state.display, color:'red'}}>Enter valid Number</p>
                <form onSubmit={this.onSubmit} className="text-center">
                    <input required className="form-control" placeholder="Name" type="text" name="name" onChange={this.onChangeName}></input>
                    <input required className="form-control" placeholder="Number" type="number" name="number" onChange={this.onChangeNumber}></input>
                    <input className="form-control" placeholder="Address" type="text" name="address" onChange={this.onChangeAddress}></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>
        );
    }
}
 
export default AddPatient;