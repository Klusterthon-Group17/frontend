import { Container } from '@mui/material';
import React, { useState } from 'react';
import { IoFlashOutline } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import error from '../../assets/svgs/rafiki.svg';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';

const Pricing = () => {
  const [value, setValue] = useState(0);
  return (
    <Container className='w-full space-y-5 pt-10'>
      <div className='flex gap-5 py-5 rounded-lg px-5 bg-Text_main w-full mx-auto md:w-[55%] md:px-10'>
        <button
          onClick={() => setValue(0)}
          className={`w-full flex justify-center items-center gap-3 py-4 rounded-lg text-sm md:text-base ${
            value === 0
              ? ' bg-Primary_main text-Text_main hover:bg-Primary_light'
              : 'bg-Text_main text-Text_dark hover:bg-Text_dark hover:text-Text_main'
          }`}
        >
          <IoFlashOutline /> H.AI - Free
        </button>

        <button
          onClick={() => setValue(1)}
          className={`w-full flex justify-center items-center gap-3 py-4 px-3 rounded-lg text-sm md:text-base ${
            value === 1
              ? ' bg-Primary_main text-Text_main hover:bg-Primary_light'
              : 'bg-Text_main text-Text_dark hover:bg-Text_dark hover:text-Text_main'
          }`}
        >
          <AiOutlineStar /> H.AI - Alpha <CiLock />
        </button>
      </div>

      {value === 0 ? (
        <div className='rounded-lg p-5 space-y-5 mx-auto w-full text-Text_main bg-Primary_main md:w-[55%]'>
          <div>
            <h1 className='font-bold text-2xl'>H.AI - Free</h1>
            <h4 className=' font-light'>Free version</h4>
          </div>

          <h1 className=' text-Text_gold'>
            $<span className=' text-5xl'>0</span>
          </h1>

          <div className='space-y-5'>
            {DUMMY_DATA.map((data, index) => (
              <div key={index} className='flex gap-3'>
                <div className=' mt-1'>{data.icon}</div>
                <div className='space-y-3'>
                  <h1 className='font-bold text-xl'>{data.name}</h1>
                  <h4 className='font-light'>{data.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='rounded-lg p-5 space-y-5 mx-auto w-full md:w-[55%]'>
          <img src={error} alt='error-img' className='mx-auto' />

          <div className='text-center space-y-3 text-Text_dark'>
            <h1 className='tracking-wider text-4xl'>
              This service is currently unavailable!
            </h1>
            <h4>
              Contact our support desk at supporthealthai.com for more
              information.
            </h4>
          </div>

          <Button>
            <Link to={RouteEnum.SETTINGS}>Go back to settings</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Pricing;

const DUMMY_DATA = [
  {
    name: 'Symptom Checker',
    desc: 'Describe your symptoms and receive immediate preliminary advice.',
    icon: <IoCheckmarkCircleOutline />,
  },
  {
    name: 'Quick Responses',
    desc: 'Fast and efficient chatbot interaction for rapid guidance.',
    icon: <FaRegCircleXmark />,
  },
  {
    name: 'Decision Support',
    desc: 'Assistance in determining the urgency of seeking in-person medical care.',
    icon: <FaRegCircleXmark />,
  },
  {
    name: 'Unlimited Access to database',
    desc: 'Access to unlimited set of common symptoms and general guidance on potential diagnoses.',
    icon: <FaRegCircleXmark />,
  },
];
