import React from 'react';
import Button from '../../common/Button';
import iphone from '../../assets/svgs/iPhone 12 Pro (Wooden Hands).svg';
import logo from '../../assets/svgs/Group 217.svg';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constant/RouteConstant';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container className='my-10'>
      <div className='grid grid-cols-1 gap-10 items-center md:grid-cols-2'>
        <div className=''>
          <img src={iphone} alt='iphone' className='mx-auto' />
        </div>

        <div className='-mt-60 bg-Body text-center py-14 space-y-5 md:-mt-0 md:py-0'>
          <div className='hidden md:block'>
            <img src={logo} alt='logo' className='mx-auto w-32' />
          </div>
          <div>
            <h1 className=' text-4xl font-bold tracking-wider md:text-6xl'>
              Let’s Take Care
            </h1>
            <h1 className=' text-4xl font-bold tracking-wider md:text-6xl'>
              of You
            </h1>
          </div>
          <h4 className='w-full mx-auto md:w-[90%]'>
            Your one-stop solution for getting symptom-based medical advice and
            diagnosis.
          </h4>

          <div className='w-full mx-auto space-y-3 md:w-[70%]'>
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
      </div>
    </Container>
  );
};

export default Home;
