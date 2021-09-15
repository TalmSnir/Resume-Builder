import React, { useState } from 'react';
import SelectedSectionsList from './SelectedSectionsList';
import UnSelectedSectionsList from './UnSelectedSectionsList';
function SectionsSelectionsLists() {
  const [selectedItems, setSelectedItems] = useState([
    'education',
    'projects',
    'certificates',
  ]);
  const [unSelectedItems, setUnSelectedItems] = useState(['1', '2', '3']);
  const handleAddSelection = itemToAdd => {
    setSelectedItems(selectedItems => [...selectedItems, itemToAdd]);
    setUnSelectedItems(selectedItems =>
      selectedItems.filter(item => item !== itemToAdd)
    );
  };
  const handleRemoveSelection = itemToRemove => {
    setSelectedItems(selectedItems =>
      selectedItems.filter(item => item !== itemToRemove)
    );
    setUnSelectedItems(selectedItems => [...selectedItems, itemToRemove]);
  };

  return (
    <div className='section-selectable__lists section-container'>
      <SelectedSectionsList
        selectedItems={selectedItems}
        handleRemove={handleRemoveSelection}
      />
      <UnSelectedSectionsList
        unSelectedItems={unSelectedItems}
        handleAdd={handleAddSelection}
      />
    </div>
  );
}

export default SectionsSelectionsLists;
