import React from 'react';
import Button from './Button';
function PreviewFooter() {
  return (
    <div className='card__footer preview__footer'>
      <Button secondary iconName='share'>
        share
      </Button>
      <Button primary iconName='download'>
        download
      </Button>
    </div>
  );
}

export default PreviewFooter;
