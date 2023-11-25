import React from 'react';
import { RiUserLine } from 'react-icons/ri';
import { SlLock } from 'react-icons/sl';
import { VscDiffAdded } from 'react-icons/vsc';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { PiNoteThin } from 'react-icons/pi';
import { PiNotebookLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md';
import { RouteEnum } from '../../constant/RouteConstant';

const Settings = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <h2 className=' font-extralight'>Account</h2>

        <div className='bg-Text_main p-5 rounded-lg'>
          <Link
            to={RouteEnum.SETTINGS_PROFILE}
            className='flex gap-5 items-center py-5 px-3 hover:bg-Body'
          >
            <div>
              <RiUserLine />
            </div>
            <h4>Profile information</h4>
          </Link>

          <Link
            to={RouteEnum.SETTINGS_PASSWORD}
            className='flex justify-between items-center py-5 px-3 hover:bg-Body'
          >
            <div className='flex gap-5 items-center'>
              <div>
                <SlLock />
              </div>
              <h4>Password</h4>
            </div>
            <div>
              <MdNavigateNext />
            </div>
          </Link>

          <Link
            to={RouteEnum.SETTINGS_SUBSCRIPTION}
            className='flex justify-between items-center py-5 px-3 hover:bg-Body'
          >
            <div className='flex gap-5 items-center'>
              <div>
                <VscDiffAdded />
              </div>
              <h4>Subscriptions</h4>
            </div>

            <h2 className=' text-Text_dark'>FREE</h2>
          </Link>
        </div>
      </div>

      <div className='space-y-3'>
        <h2 className='font-extralight'>About</h2>

        <div className='bg-Text_main p-5 rounded-lg'>
          <Link className='flex gap-5 items-center py-5 px-3 hover:bg-Body'>
            <div>
              <IoIosHelpCircleOutline />
            </div>
            <h4>Help</h4>
          </Link>

          <Link className='flex gap-5 items-center py-5 px-3 hover:bg-Body'>
            <div>
              <PiNotebookLight />
            </div>
            <h4>Terms of Use</h4>
          </Link>

          <Link className='flex gap-5 items-center py-5 px-3 hover:bg-Body'>
            <div>
              <SlLock />
            </div>
            <h4>Privacy Policy</h4>
          </Link>

          <Link className='flex justify-between items-center py-5 px-3 hover:bg-Body'>
            <div className='flex gap-5 items-center'>
              <div>
                <PiNoteThin />
              </div>
              <h4>Licenses</h4>
            </div>
            <div>
              <MdNavigateNext />
            </div>
          </Link>
        </div>
      </div>

      <h2 className='text-center text-Text_dark'>Version 1.0</h2>
    </section>
  );
};

export default Settings;
