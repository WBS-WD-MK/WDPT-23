import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const navLink = [
    { name: 'home', href: '/' },
    { name: 'todos', href: '/todos' },
  ];
  return (
    <header className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>daisyUI</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {navLink.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? 'text-primary' : 'text-neutral-content')}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
