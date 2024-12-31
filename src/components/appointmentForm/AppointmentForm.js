import React from "react";
import { ContactPicker, contactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleInput = (setter) => (e) => {
    setter(e.target.value)
  };
  const handleContact = ()=>{
    if (contacts){
      return contacts.map((contact) => contact.name)
    } 
    }
    //getting error from map
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type= 'text' name = "name" value={title} onChange={handleInput(setTitle)} id='name' ></input>

      <label htmlFor="date">Date</label>
      <input type= 'date' name = "date" id='date' value={date} min = {getTodayString()} onChange={handleInput(setDate)} ></input>

      <label htmlFor="time">Time</label>
      <input type= 'time' name = "time" id='time' value={time} onChange={handleInput(setTime)} ></input>
      
      <ContactPicker contactList = {handleContact()} onChange={handleInput(setContact)}/>
      
      <button type='submit'>Submit</button>
      </form>
    </>
  );
};
