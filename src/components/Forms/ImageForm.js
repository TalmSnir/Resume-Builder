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
      <label htmlFor='avatar__shape__switch' className='label--row '>
        round
        <input
          type='checkbox'
          role='switch'
          name='avatar__shape__switch'
          id='avatar__shape__switch'
          onChange={e => handleUpdateImageShape(e)}
        />
        square
      </label>
      <label htmlFor='avatar'>
        upload image
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
  );
}

export default ImageForm;
