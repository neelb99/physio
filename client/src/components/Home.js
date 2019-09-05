import React from 'react';
import {FaCalendarAlt,FaAddressBook,FaPlusSquare} from "react-icons/fa";
import {IoMdClipboard} from 'react-icons/io'



function Home(){
    return (
    <div className="container-fluid-home bg-primary">
        <div className="jumbotron">
            <h1>Appointment System</h1>
            <p><FaCalendarAlt/> View individual and group schedules at a glance</p>
            <br /> 
            <p><IoMdClipboard/> Store appointment history for future reference</p>
            <br />
            <p><FaAddressBook/> Maintain a record of doctors and patients</p>
            <br />
            <p><FaPlusSquare/> Add or remove appointments with ease</p>
            <br />
            
        </div>
    </div>
    );
}
 
export default Home;