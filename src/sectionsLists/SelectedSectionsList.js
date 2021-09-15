import React, { useState } from 'react';
import { MdDragHandle, MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import DragItem from '../DragAndDrop/DragItem';
const SelectedSectionsList = ({ selectedItems, handleRemove, handleEdit }) => {
  const [dragItem, setDragItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  return (
    <div>
      <h1>section selected</h1>

      <ul>
        {selectedItems.map((item, id) => (
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
              <MdDragHandle className='icon--drag' />
              <span className='selectable__item__content'>{item}</span>
              <div className='selectable__item__edit-icons '>
                <MdEdit />
                <FaTrash
                  className='icon--remove'
                  onClick={() => handleRemove(item)}
                />
              </div>
            </li>
          </DragItem>
        ))}
      </ul>
    </div>
  );
};

export default SelectedSectionsList;
