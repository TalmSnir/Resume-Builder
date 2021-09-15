import React from 'react';
import PreviewFooter from './PreviewFooter';
import PreviewDoc from './PreviewDoc';
import EducationDocSection from './DocSections/EducationDocSection';
import PersonalInformationDocSection from './DocSections/PersonalInformationDocSection';
function PreviewWindow() {
  return (
    <section className='preview__window section-container'>
      <PreviewDoc>
        <PersonalInformationDocSection />
        <EducationDocSection />
      </PreviewDoc>
      <PreviewFooter />
    </section>
  );
}

export default PreviewWindow;
//
//         <ProjectsDcoSection />
//         <CertificatesDcoSection />
//
