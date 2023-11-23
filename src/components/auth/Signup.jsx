import React, { useState } from 'react';
import Button from '../../common/Button';
import logo from '../../assets/svgs/logo green.svg';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='grid grid-cols-1 gap-10 items-center md:grid-cols-2'>
      <div className='flex flex-col items-center py-28 bg-Dark md:py-48'>
        <img src={logo} alt='logo' className='mx-auto' />
      </div>

      <div className='space-y-5 bg-Body p-5 md:mr-20 rounded-t-3xl -mt-14 md:py-0 md:rounded-t-none md:-mt-0'>
        <h1 className=' text-lg font-bold'>Create Account </h1>
        <h4>Sign up and join millions of healthy users</h4>

        <form className='space-y-3'>
          <FormControl fullWidth>
            <TextField label='Email' id='email' name='email' type='email' />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? (
                        <MdOutlineVisibility />
                      ) : (
                        <MdOutlineVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label='Password'
              placeholder='Password'
              name='password'
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? (
                        <MdOutlineVisibility />
                      ) : (
                        <MdOutlineVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label='Re-Type Password'
              placeholder='Password'
              name='password'
              fullWidth
            />
          </FormControl>
        </form>

        <Button>
          <Link to={RouteEnum.SIGNUP}>Create Account</Link>
        </Button>
        <h6 className='text-center'>
          Already have an account?{' '}
          <span className=' text-Primary_main hover:cursor-pointer hover:underline'>
            <Link to={RouteEnum.SIGNIN}>Login</Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
