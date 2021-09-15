import React, { useEffect, useState } from 'react';

function DragItem({
  children,
  setDragItem,
  setDraggedOverItem,
  draggedOverItem,
  dragItem,
  id,
}) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    console.log(isDraggingOver, id);
  }, [isDraggingOver, id]);
  const handleDragStart = (e, setIsDragging) => {
    const item = e.currentTarget;
    e.dataTransfer.setData('text/html', item.innerHTML);
    e.dataTransfer.effectAllowed = 'move';

    setDragItem(item);
    setIsDragging(true);
  };
  const handleDragEnter = (e, setIsDraggingOver) => {
    e.preventDefault();
    const item = e.currentTarget;

    setIsDraggingOver(true);
    setDraggedOverItem(item);
  };
  const handleDragLeave = (e, setIsDraggingOver) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };
  const handleDrop = (e, setIsDragging, setIsDraggingOver) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    if (draggedOverItem !== dragItem) {
      dragItem.innerHTML = draggedOverItem.innerHTML;
      draggedOverItem.innerHTML = e.dataTransfer.getData('text/html');
    }
    setIsDragging(false);
    setIsDraggingOver(false);
    setDragItem(null);
    setDraggedOverItem(null);
  };
  const handleDragEnd = (e, setIsDragging, setIsDraggingOver) => {
    e.preventDefault();
    e.dataTransfer.clearData();
    setIsDragging(false);
    setDragItem(null);
    setDraggedOverItem(null);
    setIsDraggingOver(false);
  };
  return (
    <div
      className={`section-selectable__item section-selectable__item--used ${
        isDragging ? 'dragging' : ''
      } ${isDraggingOver && !isDragging ? 'dragging-over' : ''}`}
      draggable='true'
      onDragStart={e => handleDragStart(e, setIsDragging)}
      onDragEnd={e => handleDragEnd(e, setIsDragging, setIsDraggingOver)}
      onDragLeave={e => handleDragLeave(e, setIsDraggingOver)}
      onDragEnter={e => handleDragEnter(e, setIsDraggingOver)}
      onDrop={e => handleDrop(e, setIsDragging, setIsDraggingOver)}
      onDragOver={e => e.preventDefault()}>
      {children}
    </div>
  );
}

export default DragItem;
