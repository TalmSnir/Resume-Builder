import React from 'react';
import Nav from './Nav';
import Button from './Button';
import { FaEnvelope } from 'react-icons/fa';
function Header() {
  return (
    <header className='header'>
      <FaEnvelope className='logo' />
      <Nav />

      <Button type={'primary'} iconName={'envelope'}>
        contact me
      </Button>
    </header>
  );
}

export default Header;
