import React from 'react';
import Button from '../Button';
function SkillsForm() {
  return (
    <>
      <label htmlFor=' programming-language' className='label--col'>
        programming language
        <select name='programming-language' id=' programming-language'></select>
      </label>
      <label htmlFor='frontend-development' className='label--col'>
        frontend development
        <select name='frontend-development' id='frontend-development'></select>
      </label>
      <label htmlFor='back-development' className='label--col'>
        backend development
        <select name='back-development' id='back-development'></select>
      </label>
      <label htmlFor='mobile-app-development' className='label--col'>
        mobile app development
        <select
          name='mobile-app-development'
          id='mobile-app-development'></select>
      </label>
      <label htmlFor='ai/ml' className='label--col'>
        ai/ml
        <select name='ai/ml' id='ai/ml'></select>
      </label>
      <label htmlFor='database' className='label--col'>
        database
        <select name='database' id='database'></select>
      </label>
      <label htmlFor='data-visualization' className='label--col'>
        data visualization
        <select name='data-visualization' id='data-visualization'></select>
      </label>
      <label htmlFor='devops' className='label--col'>
        devops
        <select name='devops' id='devops'></select>
      </label>
      <label htmlFor='BaaS' className='label--col'>
        backend as service(BaaS)
        <select name='BaaS' id='BaaS'></select>
      </label>
      <label htmlFor='testing' className='label--col'>
        testing
        <select name='testing' id='testing'></select>
      </label>
      <label htmlFor='software' className='label--col'>
        software
        <select name='software' id='software'></select>
      </label>
      <label htmlFor='static-site-generator' className='label--col'>
        static site generator
        <select
          name='static-site-generator'
          id='static-site-generator'></select>
      </label>
      <label htmlFor='automation' className='label--col'>
        automation
        <select name='automation' id='automation'></select>
      </label>
      <label htmlFor='design' className='label--col'>
        design
        <select name='design' id='design'></select>
      </label>
      <label htmlFor='no-code-tool' className='label--col'>
        no code tool
        <select name='no-code-tool' id='no-code-tool'></select>
      </label>
      <label htmlFor='other' className='label--col'>
        other
        <select name='other' id='other'></select>
      </label>

      <Button>add skill</Button>
    </>
  );
}

export default SkillsForm;
