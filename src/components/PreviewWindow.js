import React, { useContext } from 'react';
import PreviewFooter from './PreviewFooter';
import PreviewDoc from './PreviewDoc';
import { GlobalContext } from '../GlobalState';
import ContactInformationPreview from '../PreviewSections/ContactInformationPreview';
import AboutMePreview from '../PreviewSections/AboutMePreview';
function PreviewWindow() {
  const context = useContext(GlobalContext);
  const { selectedSections, formToShow } = context;

  return (
    <section className='preview__window section-container'>
      <h1>preview</h1>
      <PreviewDoc>
        {selectedSections.includes('contact information') && (
          <ContactInformationPreview />
        )}
        <AboutMePreview />
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
