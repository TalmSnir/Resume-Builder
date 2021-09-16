import React from 'react';

import Input from '../Input';
function ContactInformationForm() {
  // const onChange = e => {
  //   setContactInformation(contactInformation => {
  //     const { name, value } = e.target;
  //     return { ...contactInformation, [name]: value };
  //   });
  // };
  return (
    <>
      <Input
        type='text'
        name='firstName'
        sectionName='contactInformation'
        label='first name'
        direction='col'
      />
      <Input
        type='text'
        name='lastName'
        sectionName='contactInformation'
        label='last name'
        direction='col'
      />
      <Input
        type='text'
        name='title'
        sectionName='contactInformation'
        label='title'
        direction='col'
      />
      <Input
        type='email'
        name='email'
        sectionName='contactInformation'
        label='email'
        direction='col'
      />
      <Input
        type='phoneNumber'
        name='phoneNumber'
        sectionName='contactInformation'
        label='phoneNumber'
        direction='col'
      />
      <Input
        type='address'
        name='address'
        sectionName='contactInformation'
        label='address'
        direction='col'
      />
    </>
  );
}

export default ContactInformationForm;
