import React from 'react';
import Button from '../Button';
function ExperienceForm() {
  return (
    <>
      <label htmlFor=' job-title' className='label--col'>
        job title
        <input type='text' name='job-title' id='job-title' />
      </label>
      <label htmlFor='company' className='label--col'>
        company
        <input type='text' name='company' id='company' />
      </label>
      <label htmlFor='years' className='label--col'>
        years
        <input type='text' name='years' id='years' />
      </label>
      <label htmlFor='years' className='label--col'>
        description
        <input type='text' name='years' id='years' />
      </label>
      <Button>add experience</Button>
    </>
  );
}

export default ExperienceForm;
