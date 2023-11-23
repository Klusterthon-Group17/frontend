import React from 'react';
import { GoHome } from 'react-icons/go';
import { GoClock } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import logo from '../../assets/svgs/logo.svg';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';

const Navbar = () => {
  return (
    <nav className=' border-b p-5'>
      <div className='flex justify-between items-center px-10'>
        <div>
          <img src={logo} alt='logo' />
        </div>

        <div className='flex items-center gap-5'>
          {LINKS.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => {
                return isActive
                  ? 'flex items-center gap-2 px-5 py-2 rounded-lg bg-Primary_main text-Text_main'
                  : 'flex items-center gap-2 px-5 py-2 rounded-lg';
              }}
            >
              {link.icon} {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
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
