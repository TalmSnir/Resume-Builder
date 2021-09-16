import React, { useState } from 'react';
import ReactLogo from './ProfileIcon.svg';
function ImageForm() {
  const [isAvatarRound, setIsAvatarRound] = useState(true);
  const handleImageUpload = e => {
    const image = document.querySelector('.avatar__display');
    console.log(image);
    console.log('fd');
    image.src = URL.createObjectURL(e.target.files[0]);
  };
  const handleUpdateImageShape = () => {
    setIsAvatarRound(!isAvatarRound);
  };
  return (
    <div className='avatar__wrapper'>
      <img
        src={ReactLogo}
        alt='avatar'
        className={`avatar__display ${!isAvatarRound && 'square'}`}
      />
      <div className='avatar__configuration'>
        <label htmlFor='avatar__shape__switch' className='label--row '>
          <input
            type='checkbox'
            role='switch'
            name='avatar__shape__switch'
            id='avatar__shape__switch'
            onChange={e => handleUpdateImageShape(e)}
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
            onChange={e => handleImageUpload(e)}
          />
        </label>
      </div>
    </div>
  );
}

export default ImageForm;
