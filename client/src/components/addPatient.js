import React, {useState} from 'react';
import axios from 'axios';
import {Spring} from 'react-spring/renderprops';

const AddPatient = ()=>{
    const [name,setName] = useState('');
    const [number,setNumber] = useState(0);
    const [displayError,setDisplayError] = useState('none');
    const handleNameChange = e=>setName(e.target.value);
    const handleNumberChange = e=>setNumber(e.target.value);
    const handleSubmit = e=>{
        e.preventDefault();
        if(number.length!==10){
            setDisplayError('block');
            return;
        }
        const patient = {
            name:name,
            number:number
        }
        axios.post('/api/patients/add',patient)
            .then(()=>window.location='/patients');
    }
    return(
        <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >
        {props=>
            <div className="container-fluid" style={props}>
                <h2>Add Patient</h2>
                <p style={{display:displayError, color:'red'}}>Enter Valid Number</p>
                <form onSubmit={handleSubmit} className="text-center">
                    <input required className="form-control" placeholder="Name" type="text" name="name" onChange={handleNameChange}></input>
                    <input required className="form-control" placeholder="Number" type="number" name="number" onChange={handleNumberChange}></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>}
        </Spring>
    );
}

export default AddPatient;