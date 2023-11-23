import React from 'react';

const Button = (props) => {
  return (
    <button className='w-full py-2 rounded-lg bg-Primary_main text-Text_main hover:bg-Primary_light'>
      {props.children}
    </button>
  );
};

export default Button;
