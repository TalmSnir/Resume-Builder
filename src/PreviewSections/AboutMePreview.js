import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import classNames from 'classnames';
function AboutMePreview() {
  const context = useContext(GlobalContext);
  const { aboutMe } = context.formFields;
  const { formToShow } = context;
  const className = classNames('preview__aboutMe', 'preview__section', {
    preview__selected: formToShow === 'about me',
  });
  return (
    <section className={className}>
      <h1 className='preview__about__header'>about me</h1>
      <p className='preview__about__text'>{aboutMe.aboutMe}</p>
    </section>
  );
}

export default AboutMePreview;
