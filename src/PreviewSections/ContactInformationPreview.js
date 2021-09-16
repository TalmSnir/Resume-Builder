import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
function ContactInformationPreview() {
  const context = useContext(GlobalContext);
  const { firstName, lastName, title, email, phoneNumber, address } =
    context.formFields.contactInformation;

  return (
    <div className='preview__contactInformation'>
      <h1>{`${firstName} ${lastName}`}</h1>
      <h2>{title}</h2>
      <div style={{ display: 'flex' }}>
        <span>{phoneNumber}</span>
        <span>{email}</span>
        <span>{address}</span>
      </div>
    </div>
  );
}

export default ContactInformationPreview;
