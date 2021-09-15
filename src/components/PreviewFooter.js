import React from 'react';
import Button from './Button';
function PreviewFooter() {
  return (
    <div className='card__footer preview__footer'>
      <Button type={'secondary'} iconName={'share'}>
        share
      </Button>
      <Button type={'primary'} iconName={'download'}>
        download
      </Button>
    </div>
  );
}

export default PreviewFooter;
