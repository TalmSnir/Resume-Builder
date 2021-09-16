import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import classNames from 'classnames';
function ImagePreview() {
  const context = useContext(GlobalContext);
  const { avatarImage } = context.formFields;
  const { imageSrc, shape } = avatarImage;
  const { formToShow } = context;
  const classNameImage = classNames('avatar__display', {
    square: shape === 'square',
  });
  const classNameContainer = classNames({
    preview__selected: formToShow === 'avatar image',
  });
  return (
    <div className={classNameContainer}>
      <img src={imageSrc} alt='avatar-preview' className={classNameImage} />
    </div>
  );
}

export default ImagePreview;
