import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../GlobalState';
import Icon from '../components/Icon';
import Button from '../components/Button';
import DragItem from '../DragAndDrop/DragItem';
const SelectedSectionsList = () => {
  const dragItem = useRef();
  const dragId = useRef();
  // const [draggedOverItem, setDraggedOverItem] = useState(null);
  const context = useContext(GlobalContext);
  const {
    selectedSections,
    handleRemoveSelection,
    handleEditSelection,
    handleDragSwitch,
  } = context;

  return (
    <div>
      <h1>section selected</h1>

      <ul className='selectedItems'>
        {selectedSections.map((item, id) => (
          <DragItem
            idx={id}
            key={item}
            dragItem={dragItem}
            dragId={dragId}
            handleDragSwitch={handleDragSwitch}>
            <li
              key={id}
              className='section-selectable__item section-selectable__item--used '>
              <Icon name='dragHandle' />
              <span className='selectable__item__content'>{item}</span>
              <div className='selectable__item__edit-icons '>
                <Button icon onClick={() => handleEditSelection(item)}>
                  <Icon name='edit' />
                </Button>
                <Button icon onClick={() => handleRemoveSelection(item)}>
                  <Icon name='trash' />
                </Button>
              </div>
            </li>
          </DragItem>
        ))}
      </ul>
    </div>
  );
};

export default SelectedSectionsList;
