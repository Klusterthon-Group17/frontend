import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { GoClock } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import { GoSignOut } from 'react-icons/go';
import SignoutModal from '../../common/SignoutModal';

const SidebarMobile = ({ setToggleNav }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <aside className='fixed left-0 z-20 h-full w-[60%] bg-Text_main border-r border-Primary_main'>
        <div className='flex flex-col justify-between p-5'>
          <div className='flex flex-col gap-5'>
            {LINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setToggleNav(false)}
                className={({ isActive }) => {
                  return isActive
                    ? 'flex items-center gap-2 px-5 py-5 rounded-lg bg-Primary_main text-Text_main hover:bg-Primary_light'
                    : 'flex items-center gap-2 px-5 py-5 rounded-lg hover:bg-Primary_lighter hover:text-Text_main';
                }}
              >
                {link.icon} {link.name}
              </NavLink>
            ))}
          </div>

          <div className='py-20 mt-[130px]'>
            <button
              onClick={handleClickOpen}
              className='flex w-full items-center gap-2 px-5 py-5 text-Red rounded-lg hover:bg-Body'
            >
              <GoSignOut /> Sign out
            </button>
            <SignoutModal open={open} onClose={handleClose} />
          </div>
        </div>
      </aside>
      <div
        onClick={() => setToggleNav(false)}
        className='fixed w-full h-full z-10 bg-black opacity-60'
      />
    </>
  );
};

export default SidebarMobile;

const LINKS = [
  {
    name: 'Home',
    path: RouteEnum.CHAT,
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
