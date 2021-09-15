import React from 'react';

function ContactInformationForm() {
  return (
    <>
      <label htmlFor='phone-number' className='label--col'>
        phone number
        <input type='number' name='phone-number' id='phone-number' />
      </label>
      <label htmlFor='email' className='label--col'>
        email
        <input type='email' name='email' id='email' />
      </label>
      <label htmlFor='email' className='label--col'>
        email
        <input type='email' name='email' id='email' />
      </label>
      <label htmlFor='email' className='label--col'>
        email
        <input type='email' name='email' id='email' />
      </label>
      <label htmlFor='email' className='label--col'>
        email
        <input type='email' name='email' id='email' />
      </label>
    </>
  );
}

export default ContactInformationForm;
