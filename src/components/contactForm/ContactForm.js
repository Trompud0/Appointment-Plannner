import React from "react";

function formatPhoneNumber(value) {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  // Format as XXX-XXX-XXXX
  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return '';
  let formatted = '';
  if (match[1]) formatted += match[1];
  if (match[2]) formatted += '-' + match[2];
  if (match[3]) formatted += '-' + match[3];
  return formatted;
}

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
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} placeholder="Name" required></input>
      <input type='tel' name='phone' value={phone} onChange={e => setPhone(formatPhoneNumber(e.target.value))} placeholder="Phone Number" required></input>
      <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required></input>
      <input type='submit' value='Add Contact'/>
    </form>
  );
};

