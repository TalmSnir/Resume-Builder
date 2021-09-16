import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import Icon from './Icon';
function Input({
  type,
  name,
  sectionName,
  label,
  direction,
  iconName,
  href,
  iconLocation,
}) {
  const context = useContext(GlobalContext);
  const value = context.formFields[sectionName][name];
  const { handleChangeInput } = context;
  return (
    <label
      htmlFor={name}
      className={direction === 'col' ? 'label--col' : 'label--row'}>
      {label}
      <div
        tabIndex={0}
        className={`input__wrapper  
         ${iconLocation === 'end' ? 'icon-end' : 'icon-start'}`}>
        {iconName ? <Icon name={iconName} /> : null}
        {href && <span>http://</span>}
        <input
          tabIndex={-1}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={e => handleChangeInput(e.target, sectionName)}
        />
      </div>
    </label>
  );
}

export default Input;
