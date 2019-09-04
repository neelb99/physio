import React, { Component } from 'react';
import axios from 'axios';
import { NONAME } from 'dns';

class AddDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            number:0,
            display:'none'
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onSubmit(e){
        e.preventDefault();
        const doctor = {
            name: this.state.name,
            number: this.state.number
        }
        if(doctor.number.length !==10){
            this.setState({display:'block'});
            return;
        }
        axios.post('api/doctors/add',doctor)
            .then(res=>console.log(res.data));
        window.location='/doctors';
    }

    onChangeName(e){
        this.setState({name:e.target.value});
    }

    onChangeNumber(e){
        this.setState({number:e.target.value});
    }


    render() { 
        return(
            <div className="container-fluid">
                <h2>Add Doctor</h2>
                <p style={{display:this.state.display, color:'red'}}>Enter valid Number</p>
                <form onSubmit={this.onSubmit} className="text-center">
                    <input required type="text" name="name" onChange={this.onChangeName} className="form-control" placeholder="Name"></input>
                    <input required minlength="10" maxlength="10" minLength="10" type="number" name="number" onChange={this.onChangeNumber} className="form-control" placeholder="Number"></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>
        );
}
}
export default AddDoctor;