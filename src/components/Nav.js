import React from 'react';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__menu'>
        <li className='menu__item'>
          <a href='#header' className='menu__link'>
            link 1
          </a>
        </li>
        <li className='menu__item'>
          <a href='#app' className='menu__link'>
            link 2
          </a>
        </li>
        <li className='menu__item'>
          <a href='#some' className='menu__link'>
            link 3
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
