import React from 'react';
import avatar from '../../assets/svgs/avatar.svg';
import { Container, FormControl, TextField } from '@mui/material';
import Button from '../../common/Button';

const Profile = () => {
  return (
    <Container className='w-full py-10'>
      <div className='w-full mx-auto space-y-5 md:w-1/2'>
        <div className=' space-y-3'>
          <img src={avatar} alt='avatar' className='mx-auto' />
          <h2 className='text-center bg-Text_main p-3 w-48 mx-auto'>
            Choose Avatar
          </h2>
        </div>

        <form className='space-y-5'>
          <FormControl fullWidth>
            <TextField label='Email' id='email' name='email' type='email' />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label='Firstname'
              id='firstname'
              name='firstname'
              type='text'
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label='Lastname'
              id='lastname'
              name='lastname'
              type='text'
            />
          </FormControl>

          <Button>Save Changes</Button>
        </form>
      </div>
    </Container>
  );
};

export default Profile;
