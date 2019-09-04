import React, { Component } from 'react';
import axios from 'axios';

class AddDoctor extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            number:0
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
                <form onSubmit={this.onSubmit} className="text-center">
                    <input type="text" name="name" onChange={this.onChangeName} className="form-control" placeholder="Name"></input><br/>
                    <input type="number" name="number" onChange={this.onChangeNumber} className="form-control" placeholder="Number"></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>
        );
}
}
export default AddDoctor;