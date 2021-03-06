import React, { useContext } from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { GlobalContext } from '../GlobalState';
const UnSelectedSectionsList = () => {
  const context = useContext(GlobalContext);
  const { unSelectedSections, handleAddSelection } = context;
  return (
    <div>
      <h1>section selected</h1>

      <ul>
        {unSelectedSections.map((item, id) => (
          <li
            key={id}
            className='section-selectable__item section-selectable__item--unused'>
            <Button icon onClick={() => handleAddSelection(item)}>
              <Icon name='plus' />
            </Button>

            <span className='selectable__item__content'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnSelectedSectionsList;
