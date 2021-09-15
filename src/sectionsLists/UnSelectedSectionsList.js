import React from 'react';
import { FaPlus } from 'react-icons/fa';

const UnSelectedSectionsList = ({ unSelectedItems, handleAdd }) => {
  return (
    <div>
      <h1>section selected</h1>

      <ul>
        {unSelectedItems.map((item, id) => (
          <li
            key={id}
            className='section-selectable__item section-selectable__item--unused'
            onClick={() => handleAdd(item)}>
            <FaPlus className='icon--add' />
            <span className='selectable__item__content'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnSelectedSectionsList;
