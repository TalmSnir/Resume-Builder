import React from 'react';
import { FaEnvelope, FaDownload, FaSmileWink, FaShare } from 'react-icons/fa';
const Icon = ({ iconName }) => {
  let icon;
  switch (iconName) {
    case 'envelope':
      icon = <FaEnvelope />;
      break;
    case 'download':
      icon = <FaDownload />;
      break;
    case 'share':
      icon = <FaShare />;
      break;
    default:
      icon = <FaSmileWink />;
  }
  return icon;
};
function Button({ children, onClick, type, iconName }) {
  return (
    <button
      className={type === 'primary' ? 'btn--primary' : 'btn--secondary'}
      onClick={onClick}>
      {iconName && <Icon iconName={iconName} />}
      {children}
    </button>
  );
}

export default Button;
