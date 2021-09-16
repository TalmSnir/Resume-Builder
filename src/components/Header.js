import React from 'react';
// import Nav from './Nav';
import Button from './Button';
import { FaFile } from 'react-icons/fa';
function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <FaFile />
        resume builder
      </div>

      {/* <Nav />*/}

      <Button type={'primary'} iconName={'envelope'}>
        contact me
      </Button>
    </header>
  );
}

export default Header;
