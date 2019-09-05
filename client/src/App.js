import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'
import './css/App.css';
import PatientList from './components/patients-list.js';
import AddPatient from './components/addPatient.js';
import AddAppointment from './components/addAppointment.js';
import AppointmentList from './components/appointmentList.js';
import AddDoctor from './components/addDoctor.js';
import DoctorList from './components/doctorList.js';
import ViewDoctor from './components/viewDoctor';
import Home from './components/Home';

const App = ()=>{
  return (
    <Router>
        <Navbar />
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/patients" component={PatientList}></Route>
        <Route path = "/addpatient" component={AddPatient}></Route>
        <Route path = "/addappointment" component={AddAppointment}></Route>
        <Route path = "/appointments" component={AppointmentList}></Route>
        <Route path="/adddoctor" component={AddDoctor}></Route>
        <Route path="/doctors" exact component={DoctorList}></Route>
        <Route path="/doctors/view" component={ViewDoctor}></Route>
    </Router>
  );
}

export default App;
