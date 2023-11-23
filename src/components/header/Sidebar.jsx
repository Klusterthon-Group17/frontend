import React from 'react';
import { GoHome } from 'react-icons/go';
import { GoClock } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import { GoSignOut } from 'react-icons/go';

const Sidebar = () => {
  return (
    <aside className='fixed h-full right-0 bg-Text_main w-1/2'>
      <div className='flex flex-col justify-between p-5'>
        <div className='flex flex-col gap-5'>
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

        <div className=' mt-[550px]'>
          <button className='flex items-center gap-2 px-5 py-2 text-Red rounded-lg hover:bg-Primary_lighter hover:text-Text_main'>
            <GoSignOut /> Sign out
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

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
