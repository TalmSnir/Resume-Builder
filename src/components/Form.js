import React from 'react';
import ImageForm from './Forms/ImageForm';

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
      <form>
        <ImageForm />
      </form>
    </section>
  );
}

export default Form;
// <EducationForm />
// <ProjectsForm />
