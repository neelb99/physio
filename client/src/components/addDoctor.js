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
        axios.post('/doctors/add',doctor)
            .then(res=>console.log(res.data));
    }

    onChangeName(e){
        this.setState({name:e.target.value});
    }

    onChangeNumber(e){
        this.setState({number:e.target.value});
    }



    render() { 
        return(
            <form onSubmit={this.onSubmit}>
                Name:<input type="text" name="name" onChange={this.onChangeName}></input><br/>
                Number: <input type="number" name="number" onChange={this.onChangeNumber}></input><br />
                <input type="submit"></input>
            </form>
        );
}
}
export default AddDoctor;