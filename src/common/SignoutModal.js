import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import signout from '../assets/svgs/pana.svg';
import Button from './Button';

const SignoutModal = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className='p-10 space-y-5'>
        <div>
          <img src={signout} alt='img' className='mx-auto' />
        </div>

        <h1 className='text-center'>
          Ready to sign out? Confirm for a secure exit.
        </h1>

        <div className='flex gap-5'>
          <button
            onClick={handleClose}
            className='w-full py-4 rounded-lg bg-Text_main hover:bg-red-300 hover:text-Text_main'
          >
            Cancel
          </button>
          <Button>Confirm</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default SignoutModal;

SignoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
