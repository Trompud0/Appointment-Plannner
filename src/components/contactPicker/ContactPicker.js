import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange, value, name } = props;
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, index) => <option key={index} value={contact.name}>{contact.name}</option>)}
    </select>
  );
};
