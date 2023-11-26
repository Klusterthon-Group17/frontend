import React from 'react';
import Button from '../../common/Button';
import logo from '../../assets/svgs/logo green.svg';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import { TextField } from '@mui/material';

const Verify = () => {
  return (
    <div className='grid grid-cols-1 w-full gap-10 items-center md:grid-cols-2'>
      <div className='bg-Dark flex flex-col items-center'>
        <div className='py-[46%]'>
          <img src={logo} alt='logo' className='mx-auto' />
        </div>
      </div>

      <div className='space-y-5 text-center bg-Body px-5 py-10 rounded-t-3xl mr-0 -mt-14 md:space-y-10 md:mr-24 md:rounded-t-none md:-mt-0'>
        <div className=''>
          <img src={logo} alt='logo' className='mx-auto w-20' />
        </div>

        <div className=' space-y-3'>
          <h1 className=' text-4xl font-bold'>Email Verification</h1>
          <h4>A 5-digit code has been sent to your email!</h4>
        </div>

        <form className='flex gap-3'>
          <TextField id='password' name='password' type='password' />
          <TextField id='password' name='password' type='password' />
          <TextField id='password' name='password' type='password' />
          <TextField id='password' name='password' type='password' />
          <TextField id='password' name='password' type='password' />
        </form>

        <div className='w-full mx-auto space-y-3 md:w-[90%]'>
          <h6 className='text-center'>
            Didn’t receive code?{' '}
            <span className=' text-Primary_main hover:cursor-pointer hover:underline'>
              <Link to={RouteEnum.SIGNIN}>Resend</Link>
            </span>
          </h6>

          <Button
            onClick={() => {
              localStorage.setItem('health.ai', true);
              window.location.href = RouteEnum.CHAT;
            }}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
