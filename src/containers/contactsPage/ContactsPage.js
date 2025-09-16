import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (props.contacts.some(contact => contact.name === name)) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [name, props.contacts]);

  return (
    <div>
      <section id="addContactSection">
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}  
          handleSubmit={handleSubmit}
          />
      </section>
      
      <section id="contactsSection">
        <h2>Contacts</h2>
        <TileList tiles={props.contacts} />
      </section>
    </div>
  );
};
