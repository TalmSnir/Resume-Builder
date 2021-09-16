import React from 'react';
import PreviewFooter from './PreviewFooter';
import PreviewDoc from './PreviewDoc';

import ContactInformationPreview from '../PreviewSections/ContactInformationPreview';

function PreviewWindow() {
  return (
    <section className='preview__window section-container'>
      <h1>preview</h1>
      <PreviewDoc>
        <ContactInformationPreview />
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
