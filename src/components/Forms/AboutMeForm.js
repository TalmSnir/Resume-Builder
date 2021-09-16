import React from 'react';

function AboutMeForm() {
  return (
    <label htmlFor='about-me' className='label--col'>
      write a short introduction
      <textarea name='about-me' id='about-me' />
    </label>
  );
}

export default AboutMeForm;
