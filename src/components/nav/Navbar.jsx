import React, { useState } from 'react';
import hamburger from '../../assets/svgs/Menu alt 1.svg';
import { IconButton } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import SidebarMobile from './SidebarMobile';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className='fixed top-0 z-10 w-full border-b bg-Text_main p-5 md:hidden'>
        <div className='flex justify-between items-center px-5 md:px-10'>
          <IconButton onClick={() => setToggleNav(!toggleNav)}>
            <img src={hamburger} alt='hamburger' />
          </IconButton>

          <h1 className='font-bold text-lg'>Doc ADA</h1>

          <IconButton>
            <FiEdit />
          </IconButton>
        </div>
      </nav>
      {toggleNav && <SidebarMobile setToggleNav={setToggleNav} />}
    </>
  );
};

export default Navbar;
