import React, {useState} from 'react';
import axios from 'axios';
import {Spring} from 'react-spring/renderprops';

const AddDoctor = ()=>{
    const [name,setName] = useState('');
    const [number,setNumber]=useState(0);
    const [displayError,setDisplayError]=useState('none');
    const handleNameChange = e=>{setName(e.target.value)};
    const handleNumberChange = e=>{setNumber(e.target.value)};
    const handleSubmit = e=>{
        e.preventDefault();
        if(number.length!==10){
            setDisplayError('block');
            return;
        }
        const doctor = {
            name: name,
            number: number
        }
        axios.post('/api/doctors/add',doctor)
            .then(()=>window.location='/doctors');
    }

    return(
        <Spring from={{opacity:0}} to={{opacity:1}} delay="500" >
            {props=>
                <div className="container-fluid" style={props}>
                    <h2>Add Doctor</h2>
                    <p style={{display:displayError, color:'red'}}>Enter Valid Number</p>
                    <form onSubmit={handleSubmit} className="text-center">
                        <input required type="text" name="name" onChange={handleNameChange} className="form-control" placeholder="Name"></input>
                        <input required type="number" name="number" onChange={handleNumberChange} className="form-control" placeholder="Number"></input>
                        <input type="submit" className="btn btn-primary"></input>
                    </form>
                </div>
            }
        </Spring>
    );
}

export default AddDoctor;