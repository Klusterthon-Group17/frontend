import React from 'react';
import logo from '../assets/svgs/logo.svg';

const Loading = () => {
  return (
    <div className='mt-[40%] space-y-3 md:mt-[25%]'>
      <img src={logo} alt='logo' className='mx-auto animate-bounce' />
      <h1 className=' text-center'>Loading...</h1>
    </div>
  );
};

export default Loading;
