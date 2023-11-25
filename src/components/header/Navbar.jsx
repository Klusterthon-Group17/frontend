import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { GoClock } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../../assets/svgs/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import Sidebar from './Sidebar';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className='border-b bg-Text_main p-5'>
        <div className='flex justify-between items-center px-5 md:px-10'>
          <Link to={RouteEnum.HOME}>
            <img src={logo} alt='logo' />
          </Link>

          <div className='hidden items-center gap-5 md:flex'>
            {LINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => {
                  return isActive
                    ? 'flex items-center gap-2 px-5 py-2 rounded-lg bg-Primary_main text-Text_main hover:bg-Primary_light'
                    : 'flex items-center gap-2 px-5 py-2 rounded-lg hover:bg-Primary_lighter hover:text-Text_main';
                }}
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
          </div>

          <div className='md:hidden'>
            <IconButton onClick={() => setToggleNav(!toggleNav)}>
              <RxHamburgerMenu />
            </IconButton>
          </div>
        </div>
      </nav>
      {toggleNav && <Sidebar />}
    </>
  );
};

export default Navbar;

const LINKS = [
  {
    name: 'Home',
    path: RouteEnum.HOME,
    icon: <GoHome />,
  },
  {
    name: 'Chat history',
    path: RouteEnum.HISTORY,
    icon: <GoClock />,
  },
  {
    name: 'Settings',
    path: RouteEnum.SETTINGS,
    icon: <IoSettingsOutline />,
  },
];
