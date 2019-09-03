import React, { Component } from 'react';
import axios from 'axios';

class AddPatient extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            number: 0,
            address: ''
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
        axios.post('/patients/add',patient)
            .then(res=>console.log(res.data));
        this.setState({name:'',number:0,address:''});
    }

    render() { 
        return(
            <form onSubmit={this.onSubmit}>
                Name:<input type="text" name="name" onChange={this.onChangeName}></input><br/>
                Number: <input type="number" name="number" onChange={this.onChangeNumber}></input><br />
                Addess: <input type="text" name="address" onChange={this.onChangeAddress}></input><br />
                <input type="submit"></input>
            </form>
        );
    }
}
 
export default AddPatient;