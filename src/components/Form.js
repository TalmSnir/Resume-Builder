import React from 'react';
import ImageForm from './Forms/ImageForm';
import ContactInformationForm from './Forms/ContactInformationForm';
import SocialsLinksForm from './Forms/SocialsLinksForm';
import AboutMeForm from './Forms/AboutMeForm';
import EducationForm from './Forms/EducationForm';
import ExperienceForm from './Forms/ExperienceForm';
import SkillsForm from './Forms/SkillsForm';
import ProjectsForm from './Forms/ProjectsForm';
function Form() {
  // const handleToggleForms = ({ formName }) => {
  //   let formToShow;
  //   switch (formName) {
  //     case 'avatar':
  //       formToShow = <ImageForm />;
  //       break;
  //     case 'contact information':
  //       formToShow = <ContactInformationForm />;
  //       break;
  //     default:
  //       formToShow = <ContactInformationForm />;
  //   }
  // };
  return (
    <section className='form section-container'>
      <h1>edit details</h1>
      <form>
        <ContactInformationForm />
      </form>
    </section>
  );
}

export default Form;
// <EducationForm />
// <ProjectsForm />
// <ImageForm />
//
// <AboutMeForm />
// <SocialsLinksForm />
// <EducationForm />
// <ExperienceForm />
// <SkillsForm />
// <ProjectsForm />
