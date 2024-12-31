import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContact] = useState([])
  const [appointments, setAppointment] = useState([])
  /*
  Implement functions to add data to
  contacts and appointments
  */
 const add_contact = (name, phone, email) => {
  setContact((prev) => [...prev, {
    name : name,
    phone : phone,
    email : email
  }])
 }
 const add_app = (name, contact, date, time) => {
  setAppointment((prev) => [...prev, {
    name : name,
    contact : contact,
    date : date,
    time : time
  }])
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactList = {contact} addContact = {add_contact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contactList = {contact} appointmentList = {appointments} addApp = {add_app} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
