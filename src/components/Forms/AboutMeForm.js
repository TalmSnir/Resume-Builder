import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalState';

function AboutMeForm() {
  const context = useContext(GlobalContext);
  const { aboutMe } = context.formFields.aboutMe;
  const { handleChangeInput } = context;
  return (
    <label htmlFor='about-me' className='label--col'>
      write a short introduction
      <textarea
        name='aboutMe'
        id='AboutMe'
        value={aboutMe}
        onChange={e => handleChangeInput(e.target, 'aboutMe')}
      />
    </label>
  );
}

export default AboutMeForm;
