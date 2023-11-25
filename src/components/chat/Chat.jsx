import { Avatar, Box, Stack, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import logo from '../../assets/svgs/logo.svg';

export default function Chat() {
  const [scrollContainerWidthSize, setScrollContainerWidthSize] =
    useState(null);

  // get the scroll container size, and send to input, to get appropriate width
  useEffect(() => {
    const currentElPosition = document
      .querySelector('#scroll-container')
      .getBoundingClientRect();
    setScrollContainerWidthSize(currentElPosition);
  }, []);

  const [chats, setChats] = useState([
    // {
    //   from: "me",
    //   pic: "",
    //   text: "Hey, I've been feeling fatigued lately and experiencing headaches. Any idea what might be causing this?",
    // },
    // {
    //   to: "me",
    //   pic: "",
    //   text: "Hey, I've been feeling fatigued lately and experiencing headaches. Any idea what might be causing this?",
    // },
  ]);

  // scroll to bottom auto, when user enter chat text
  useEffect(() => {
    // Get a reference to the div you want to auto-scroll.
    var someElement = document.querySelector('#scroll-container');

    function scrollToBottom() {
      someElement.scrollTop = someElement.scrollHeight;
    }
    // Create an observer and pass it a callback.
    var observer = new MutationObserver(scrollToBottom);
    // Tell it to look for new children that will change the height.
    var config = { childList: true };
    observer.observe(someElement, config);
  }, []);

  return (
    <Stack
      direction={'column'}
      height={'80vh'}
      overflow={'hidden'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      //   border="1px solid red"
    >
      {/*  Hide scrollbar but keep functionality  */}
      <style>
        {`
             /* Hide scrollbar but keep functionality */

            /* Hide scrollbar for Chrome, Safari and Opera */
            #scroll-container::-webkit-scrollbar {
              display: none;
            }
            
            /* Hide scrollbar for IE, Edge and Firefox */
            #scroll-container {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
            `}
      </style>
      <Stack
        gap='20px'
        borderRadius={'10px 0px 10px 10px'}
        height={'85vh'}
        overflow={'scroll'}
        width={['100%', '350px']}
        maxW='350px'
        direction={'column'}
        py='20px'
        id='scroll-container'
      >
        {chats?.length < 1 ? (
          <Stack
            height={'100vh'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <img
              alt={'brand logo'}
              style={{ width: '100px', height: '100px' }}
              src={logo}
            />
          </Stack>
        ) : (
          chats?.map((props, id) => {
            return <ChatBox {...props} {...id} />;
          })
        )}

        <ChatInput
          scrollContainerWidthSize={scrollContainerWidthSize}
          setChats={setChats}
        />
      </Stack>
    </Stack>
  );
}

const FROM_STYLE = {
  backgroundColor: 'rgba(3, 152, 158, 0.05)',
  textAlign: 'end',
  borderRadius: ' 10px 0px 10px 10px',
  flexDirection: 'row-reverse',
};

const TO_STYLE = {
  backgroundColor: '#fff',
  borderRadius: ' 0px 10px 10px 10px',
  boxShadow: '0px 0px 4px 0px rgba(24, 24, 24, 0.05)',
  flexDirection: 'row',
};

export const ChatBox = ({ id, from, text }) => {
  return (
    <motion.div initial={{ y: '200px' }} animate={{ y: '0px' }}>
      <Stack
        key={id}
        alignItems={'center'}
        gap='20px'
        {...(from
          ? { flexDirection: FROM_STYLE.flexDirection }
          : { flexDirection: TO_STYLE.flexDirection })}
      >
        <Avatar
          loading='lazy'
          src='https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
          alt='user pics'
        />

        <Stack
          padding='10px'
          borderRadius={'10px'}
          flexDirection={'row'}
          {...(from ? FROM_STYLE : TO_STYLE)}
        >
          <Box fontWeight={'400px'} fontSize={'.9em'}>
            <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
          </Box>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export const ChatInput = ({ scrollContainerWidthSize, setChats }) => {
  const [text, setText] = useState('');

  const handleEnterText = () => {
    setChats((chats) => [
      ...chats,
      {
        from: 'me',
        pic: '',
        text,
      },
    ]);
    setText('');
  };

  return (
    <Stack
      padding='7px'
      borderRadius='10px'
      border='1px solid #B0B0B0'
      position='absolute'
      bottom='0'
      flexDirection={'row'}
      alignItems={'center'}
      backgroundColor='#fff'
      width={scrollContainerWidthSize?.width}
    >
      <TextareaAutosize
        value={text}
        onChange={(e) => {
          const value = e.target.value;
          setText(value);
        }}
        style={{
          resize: 'none',
          color: '#676767',
          bottom: '0',
          width: 'inherit',
          outline: 'none',
        }}
      />
      <Box
        {...(text?.length > 3
          ? { backgroundColor: '#03989E', color: '#fff' }
          : { backgroundColor: '#E4E4E4' })}
        borderRadius={'8px'}
        p='10px'
        onClick={text?.length > 3 ? handleEnterText : null}
        cursor='pointer'
      >
        <FaArrowUp />
      </Box>
    </Stack>
  );
};
