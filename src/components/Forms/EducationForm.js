import React from 'react';

function EducationForm() {
  return (
    <>
      <label htmlFor='degree' className='label--col'>
        degree
        <input type='text' name='degree' id='degree' />
      </label>
      <label htmlFor='institution' className='label--col'>
        institution
        <select name='degree' id='degree'></select>
      </label>
      <label htmlFor='institution' className='label--col'>
        years
        <input type='text' name='years' id='degree'></input>
      </label>
    </>
  );
}

export default EducationForm;
