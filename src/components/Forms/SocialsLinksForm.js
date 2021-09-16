import React from 'react';
import Button from '../Button';

function SocialsLinksForm() {
  return (
    <>
      <label htmlFor='github-link' className='label--col'>
        github
        <input type='text' name='github-link' id='github-link' />
      </label>
      <label htmlFor='git-hub-link' className='label--col'>
        linkedin
        <input type='text' name=' linkedin-link' id=' linkedin-link' />
      </label>
      <label htmlFor='git-hub-link' className='label--col'>
        codepen
        <input type='text' name='codepen-link' id='codepen-link' />
      </label>
      <label htmlFor='git-hub-link' className='label--col'>
        dribblbe
        <input type='text' name='dribblbe-link' id='dribblbe-link' />
      </label>
      <Button type='primary'>add more</Button>
    </>
  );
}

export default SocialsLinksForm;
