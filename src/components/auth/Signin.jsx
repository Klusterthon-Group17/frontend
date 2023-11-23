import React, { useState } from 'react';
import Button from '../../common/Button';
import logo from '../../assets/svgs/logo green.svg';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
        <div className='space-y-3'>
          <h1 className=' text-lg font-bold'>Welcome Back!</h1>
          <h4>Sign into your to continue</h4>
        </div>

        <form className='space-y-3'>
          <FormControl fullWidth>
            <TextField label='Email' id='email' name='email' type='email' />
          </FormControl>

          <div>
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

            <div className='flex justify-between items-center'>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <p className=' text-Primary_main hover:cursor-pointer hover:underline'>
                <Link to={RouteEnum.SIGNUP}>Forgot Password?</Link>
              </p>
            </div>
          </div>
        </form>

        <Button>
          <Link to={RouteEnum.SIGNUP}>Login</Link>
        </Button>
        <h6 className='text-center'>
          Don’t have an account?{' '}
          <span className=' text-Primary_main hover:cursor-pointer hover:underline'>
            <Link to={RouteEnum.SIGNUP}>Create account</Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
