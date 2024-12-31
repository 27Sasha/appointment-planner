import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const AppointmentsPage = ({contactList, appointmentList, addApp}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [inputName, setInputName] = useState('')
  const [inputContact, setInputContact] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputTime, setInputTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addApp({
    name: inputName,
    contact: inputContact,
    date: inputDate,
    time: inputTime
   })

    setInputName('')
    setInputContact('')
    setInputDate('')
    setInputTime('')

  };

  return (
    <div>
      <section>
          <h2>Add Appointment</h2>
          <AppointmentForm title = {inputName} contacts = {inputContact} date = {inputDate} time = {inputTime} setTitle = {setInputName} setContact = {setInputContact} settime = {setInputTime} setDate = {setInputDate} handleSubmit = {handleSubmit}/>

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointmentList= {appointmentList} />
      </section>
    </div>
  );
};