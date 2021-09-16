import React from 'react';
import {
  FaFile,
  FaEnvelope,
  FaDownload,
  FaSmileWink,
  FaShare,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';
import { MdDragHandle, MdEdit } from 'react-icons/md';

function Icon({ name }) {
  switch (name) {
    case 'envelope':
      return <FaEnvelope />;
    case 'download':
      return <FaDownload />;
    case 'share':
      return <FaShare />;
    case 'file':
      return <FaFile />;
    case 'trash':
      return <FaTrash />;
    case 'plus':
      return <FaPlus />;
    case 'dragHandle':
      return <MdDragHandle className='icon--drag' />;
    case 'edit':
      return <MdEdit />;
    default:
      return <FaSmileWink />;
  }
}

export default Icon;
