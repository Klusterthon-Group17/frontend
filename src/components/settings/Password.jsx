import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Button from '../../common/Button';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <div className='w-full mx-auto space-y-5 md:w-1/2'>
        <form className='space-y-5'>
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
              label='New Password'
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
              label='Re-Type New Password'
              placeholder='Password'
              name='password'
              fullWidth
            />
          </FormControl>

          <Button>Save Changes</Button>
        </form>
      </div>
    </section>
  );
};

export default Password;
