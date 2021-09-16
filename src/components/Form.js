import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import ImageForm from './Forms/ImageForm';
import ContactInformationForm from './Forms/ContactInformationForm';
import SocialsLinksForm from './Forms/SocialsLinksForm';
import AboutMeForm from './Forms/AboutMeForm';
import EducationForm from './Forms/EducationForm';
import ExperienceForm from './Forms/ExperienceForm';
import SkillsForm from './Forms/SkillsForm';
import ProjectsForm from './Forms/ProjectsForm';
function Form() {
  const context = useContext(GlobalContext);
  const { formToShow } = context;

  return (
    <section className='form section-container'>
      <h1>edit details</h1>
      <form>
        {formToShow === 'about me' && <AboutMeForm />}
        {formToShow === 'contact information' && <ContactInformationForm />}
        {formToShow === 'avatar image' && <ImageForm />}
        {formToShow === 'projects' && <ProjectsForm />}
        {formToShow === 'skills' && <SkillsForm />}
        {formToShow === 'experience' && <ExperienceForm />}
        {formToShow === 'education' && <EducationForm />}
        {formToShow === 'social links' && <SocialsLinksForm />}
      </form>
    </section>
  );
}

export default Form;
