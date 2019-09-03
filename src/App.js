import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar.js'
import './css/App.css';
import PatientList from './components/patients-list.js';
import AddPatient from './components/addPatient.js';
import AddAppointment from './components/addAppointment.js';
import AppointmentList from './components/appointmentList.js';

function App() {
  return (
    <Router>
        <Navbar />
        <Route path = "/patients" component={PatientList}></Route>
        <Route path = "/addpatient" component={AddPatient}></Route>
        <Route path = "/addappointment" component={AddAppointment}></Route>
        <Route path = "/appointments" component={AppointmentList}></Route>
    </Router>
  );
}

export default App;
