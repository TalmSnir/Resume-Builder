import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import SelectedSectionsList from './SelectedSectionsList';
import UnSelectedSectionsList from './UnSelectedSectionsList';
function SectionsSelectionsLists() {
  return (
    <div className='section-selectable__lists section-container'>
      <SelectedSectionsList />
      <UnSelectedSectionsList />
    </div>
  );
}

export default SectionsSelectionsLists;
