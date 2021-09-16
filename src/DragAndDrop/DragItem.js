import React, { useState } from 'react';

function DragItem({
  children,
  setDraggedOverItem,
  draggedOverItem,
  dragItem,
  idx,

  dragId,
  handleDragSwitch,
}) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = e => {
    dragId.current = e.currentTarget.dataset.idx;
    dragItem.current = e.currentTarget;

    dragItem.current.addEventListener('ondrageend', handleDragEnd);
    setIsDragging(true);
  };
  const handleDragEnter = e => {
    e.preventDefault();
    const itemOver = e.currentTarget;

    handleDragSwitch(dragId.current, itemOver.dataset.idx);
    dragItem.current.dataset.idx = itemOver.dataset.idx;
    dragId.current = dragItem.current.dataset.idx;
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    dragItem.current = null;
    dragId.current = null;
    setIsDragging(false);
  };
  const handleDragEnd = e => {
    e.preventDefault();
    dragItem.current.removeEventListener('ondragend', handleDragEnd);
    dragItem.current = null;
    dragId.current = null;
    setIsDragging(false);
  };
  return (
    <div
      className={`section-selectable__item--used ${
        isDragging ? 'dragging' : ''
      } ${isDraggingOver && !isDragging ? 'dragging-over' : ''}`}
      data-idx={idx}
      draggable='true'
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDrop={e => handleDrop(e, setIsDragging, setIsDraggingOver)}
      onDragOver={e => e.preventDefault()}>
      {children}
    </div>
  );
}

export default DragItem;
