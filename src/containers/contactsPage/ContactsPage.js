import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [currentName, setCurrentName] = useState('')
 const [currentPhone, setCurrentPhone] = useState('')
 const [currentEmail, setCurrentEmail] = useState('')
 const [isDup, setisDup] = useState(false)

 useEffect(() =>{
  setisDup(contacts.some(contact =>
    contact.name === currentName
  ))
 }, [props.contactList.name, currentName.name])
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   
   if (!isDup){
    addContact(currentName, currentPhone, currentEmail)
    setCurrentName('')
    setCurrentPhone('')
    setCurrentEmail('')

   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name= {currentName} email = {currentEmail} phone = {currentPhone} setName = {setCurrentName} setEmail={setCurrentEmail} setPhone={setCurrentPhone} handleSubmit = {handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactList = {contacts}/>
      </section>
    </div>
  );
};
