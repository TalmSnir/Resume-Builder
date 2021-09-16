import React from 'react';

import Icon from './Icon';
import classNames from 'classnames';
function Button({ children, onClick, type, iconName, primary, secondary }) {
  const className = classNames('btn', {
    'btn--primary': primary,
    'btn--secondary': secondary,
  });
  return (
    <button className={className} onClick={onClick}>
      {iconName && <Icon name={iconName} />}
      {children}
    </button>
  );
}

export default Button;
