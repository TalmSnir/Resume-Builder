import React, { useContext } from 'react';

import { GlobalContext } from '../../GlobalState';
function ImageForm() {
  const context = useContext(GlobalContext);
  const { imageSrc, shape } = context.formFields.avatarImage;
  const { handleUploadImage, handleChangedShapeImage } = context;

  return (
    <div className='avatar__wrapper'>
      <img
        src={imageSrc}
        alt='avatar'
        className={`avatar__display ${shape === 'square' && 'square'}`}
      />
      <div className='avatar__configuration'>
        <label htmlFor='avatar__shape__switch' className='label--row '>
          <input
            type='checkbox'
            role='switch'
            name='avatar__shape__switch'
            id='avatar__shape__switch'
            checked={shape === 'square'}
            onClick={e => handleChangedShapeImage(e)}
          />
          round/ square
        </label>
        <label htmlFor='avatar'>
          <span>upload image</span>
          <input
            type='file'
            accept='image/*'
            name='avatar'
            id='avatar'
            className='avatar__input'
            onChange={e => handleUploadImage(e)}
          />
        </label>
      </div>
    </div>
  );
}

export default ImageForm;
