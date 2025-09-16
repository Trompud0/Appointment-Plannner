import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { AppointmentTileList } from "../../components/Appointment Tilelist/AppointmentTileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
   const [title, setTitle] = useState('');
   const [contact, setContact] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime(''); 
  };

  return (
    <div>
      <section id="addAppointmentSection">
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title}
          setTitle={setTitle}
          contacts={props.contacts}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      
      <section id="appointmentsSection">
        <h2>Appointments</h2>
        <AppointmentTileList tiles={props.appointments}/>
      </section>
    </div>
  );
};