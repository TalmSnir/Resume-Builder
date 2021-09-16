import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import classNames from 'classnames';
import ImagePreview from './ImagePreview';
function ContactInformationPreview() {
  const context = useContext(GlobalContext);
  const { formToShow } = context;
  const { firstName, lastName, title, email, phoneNumber, address } =
    context.formFields.contactInformation;
  const { selectedSections } = context;
  const showImage = selectedSections.includes('avatar image');
  const className = classNames(
    'preview__contactInformation',
    'preview__section',
    {
      preview__selected: formToShow === 'contact information',
    }
  );

  return (
    <div className={className}>
      {showImage && <ImagePreview />}
      <h1 className='preview__contact__name'>{`${firstName} ${lastName}`}</h1>
      <h2 className='preview__contact__title'>{title}</h2>
      <div className='preview__contact__details'>
        <span className='preview__contact__detail'>{phoneNumber}</span>
        <span className='preview__contact__detail'>{email}</span>
        <span className='preview__contact__detail'>{address}</span>
      </div>
    </div>
  );
}

export default ContactInformationPreview;
