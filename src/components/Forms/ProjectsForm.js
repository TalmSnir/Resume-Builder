import React from 'react';
import Button from '../Button';
function ProjectsForm() {
  return (
    <>
      <label htmlFor='project-name' className='label--col'>
        project name
        <input type='text' name='project-name' id='project-name' />
      </label>
      <label htmlFor='why' className='label--col'>
        why
        <input type='text' name='why' id='why' />
      </label>
      <label htmlFor='tools' className='label--col'>
        tools
        <input type='text' name='tools' id='tools' />
      </label>
      <label htmlFor='link-live-view' className='label--col'>
        link to live view
        <input type='text' name='link-live-view' id='link-live-view' />
      </label>
      <label htmlFor='link-source-code' className='label--col'>
        link to source code
        <input type='text' name='link-source-code' id='link-source-code' />
      </label>

      <Button>add project</Button>
    </>
  );
}

export default ProjectsForm;
