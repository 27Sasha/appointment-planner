import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit = {handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type= 'text' id='name' value = {name} onChange={(e) => setName(e.target.value)}></input>

      <label htmlFor="email">Email</label>
      <input type= 'email' id='email' value = {email} onChange={(e) => setEmail(e.target.value)}></input>

      <label htmlFor="phone">Number</label>
      <input type= 'tel' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"></input>

      <button type='submits'>Submit</button>

    </form>
    </>
  );
};

