import React, { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import Icon from '../components/Icon';
import Button from '../components/Button';
import DragItem from '../DragAndDrop/DragItem';
const SelectedSectionsList = () => {
  const [dragItem, setDragItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);
  const context = useContext(GlobalContext);
  const { selectedSections, handleRemoveSelection } = context;

  return (
    <div>
      <h1>section selected</h1>

      <ul>
        {selectedSections.map((item, id) => (
          <DragItem
            id={id}
            key={id}
            dragItem={dragItem}
            setDragItem={setDragItem}
            draggedOverItem={draggedOverItem}
            setDraggedOverItem={setDraggedOverItem}>
            <li
              key={id}
              className='section-selectable__item section-selectable__item--used '>
              <Icon name='dragHandle' className='icon--drag' />
              <span className='selectable__item__content'>{item}</span>
              <div className='selectable__item__edit-icons '>
                <Button>
                  <Icon name='edit' />
                </Button>
                <Button onClick={() => handleRemoveSelection(item)}>
                  <Icon name='trash' className='icon--remove' />
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
