import React from "react";

export const ContactPicker = ({ contactList, value, name, onChange }) => {
  return (
    <>
    <select onChange = {onChange} value={value} name = {name}>
      <option value={''}>No Contact Selected</option>
      {contactList.map((contact) => {
        return(
          <option key={contact} value = {contact}>{contact}</option>
        )
      })}
    </select>
    </>
  );
};
