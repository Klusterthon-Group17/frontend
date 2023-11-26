import { Avatar, Box, Stack, TextareaAutosize } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import logo from "../../assets/svgs/logo.svg";
import watermark_logo from "../../assets/svgs/watermark_chat_icon.svg";
import dayjs, { Dayjs } from "dayjs";
var isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default function Chat() {
  const [scrollContainerWidthSize, setScrollContainerWidthSize] =
    useState(null);

  const [outerContainerWidthSize, setOuterContainerWidthSize] = useState(null);

  // get the scroll container size, and send to input, to get appropriate width
  useEffect(() => {
    const currentElPosition = document
      .querySelector("#scroll-container")
      .getBoundingClientRect();
    setScrollContainerWidthSize(currentElPosition);

    // get out container width for large screen
    const currentElPositionForOuterContainer = document
      .querySelector("#outer-container")
      .getBoundingClientRect();
    setOuterContainerWidthSize(currentElPositionForOuterContainer);
  }, []);

  const [chats, setChats] = useState([
    {
      name: "osas",
      date: new Date(),
      from: "1",
      pic: "",
      text: "Hey,oname I've been feeling fatigued lately and experiencing headaches. Any idea what might be causing this?",
    },
    {
      name: "osas",
      date: new Date(),
      from: "1",
      pic: "",
      text: "Do you remember me?",
    },
    {
      name: "osas",
      date: new Date(),
      from: "1",
      pic: "",
      text: "Hey,kenhinde, wassup with your studies?",
    },
    {
      name: "kehinde",
      date: new Date(),
      to: "2",
      pic: "",
      text: "Are you there?",
    },
    {
      name: "kehinde",
      date: new Date(),
      to: "2",
      pic: "",
      text: "Hey, I've been feeling fatigued lately and experiencing headaches. Any idea what might be causing this?",
    },
  ]);

  // scroll to bottom auto, when user enter chat text
  useEffect(() => {
    // Get a reference to the div you want to auto-scroll.
    var someElement = document.querySelector("#scroll-container");

    function scrollToBottom() {
      someElement.scrollTop = someElement.scrollHeight;
    }
    // Create an observer and pass it a callback.
    var observer = new MutationObserver(scrollToBottom);
    // Tell it to look for new children that will change the height.
    var config = { childList: true };
    observer.observe(someElement, config);
  }, []);
  const messages = [
    {
      id: 2,
      message: "<p>test</p>",
      removed: "false",
      user: {
        uid: 1,
        metadata: {
          username: "Admin",
        },
      },
      post_date: "2018-02-24 22:31",
    },
    {
      id: 3,
      message: "<p>Wassup?</p>",
      removed: "false",
      user: {
        uid: 1,
        metadata: {
          username: "Admin",
        },
      },
      post_date: "2018-02-24 22:40",
    },
    {
      id: 12,
      message: "again for testing post date",
      removed: "false",
      user: {
        uid: 1,
        metadata: {
          username: "Admin",
        },
      },
      post_date: "2018-03-04 00:59",
    },
    {
      id: 13,
      message: "Hello!",
      removed: "false",
      user: {
        uid: 2,
        metadata: {
          username: "Testing",
        },
      },
      post_date: "2018-03-04 11:13",
    },
    {
      id: 13,
      message: "<p>Hi!</p>",
      removed: "false",
      user: {
        uid: 2,
        metadata: {
          username: "Testing",
        },
      },
      post_date: "2018-03-04 11:13",
    },
    {
      id: 1,
      message: "<p>yo</p>",
      removed: "false",
      user: {
        uid: 2,
        metadata: {
          username: "Testing",
        },
      },
      post_date: "2018-02-24 14:30",
    },
  ];

  return (
    <Stack
      direction={"column"}
      height={"80vh"}
      overflow={"hidden"}
      width="-webkit-fill-available"
      justifyContent={"center"}
      alignItems={"center"}
      id="outer-container"
      // border="1px solid red"
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
        gap="20px"
        borderRadius={"10px 0px 10px 10px"}
        height={"85vh"}
        overflow={"scroll"}
        width={["100%", "90%"]}
        maxW="90%"
        direction={"column"}
        py="20px"
        px={["10px", "none"]}
        id="scroll-container"

        // position={"relative"}
      >
        <img
          alt={"brand watermark logo"}
          style={{
            width: "100px",
            height: "100px",
            left: 0,
            right: "-10%",
            top: 0,
            bottom: 0,
            margin: "auto",
            position: "absolute",
          }}
          src={watermark_logo}
        />
        {chats?.map((props, id) => {
          return <ChatBox chats={chats} {...props} id={id} />;
        })}

        <ChatInput
          outerContainerWidthSize={outerContainerWidthSize}
          scrollContainerWidthSize={scrollContainerWidthSize}
          setChats={setChats}
        />
      </Stack>
    </Stack>
  );
}

const FROM_STYLE = {
  backgroundColor: "rgba(3, 152, 158, 0.05)",
  textAlign: "end",
  borderRadius: " 10px 0px 10px 10px",
  flexDirection: "row-reverse",
};

const TO_STYLE = {
  backgroundColor: "#fff",
  borderRadius: " 0px 10px 10px 10px",
  boxShadow: "0px 0px 4px 0px rgba(24, 24, 24, 0.05)",
  flexDirection: "row",
};

export const ChatBox = ({ chats, name, id, from, text }) => {
  return (
    <motion.div initial={{ y: "200px" }} animate={{ y: "0px" }}>
      <Stack
        key={id}
        alignItems={"center"}
        gap="20px"
        // maxWidth={"350px"}
        // border="1px solid red"
        {...(from
          ? { flexDirection: FROM_STYLE.flexDirection }
          : { flexDirection: TO_STYLE.flexDirection })}
      >
        {/* if the author of the previous message is same with the current one, then hide the avatar,
             we have the same user then, and only show the chat */}
        {name !== chats[id - 1]?.name ? (
          <Avatar
            loading="lazy"
            src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            alt="user pics"
          />
        ) : (
          <Stack ml="35px" />
        )}

        <Stack
          padding="10px"
          borderRadius={"10px"}
          flexDirection={"row"}
          {...(from ? FROM_STYLE : TO_STYLE)}
        >
          <Box fontWeight={"400px"} fontSize={".9em"}>
            <p
              style={{
                textAlign: "start",
                whiteSpace: "pre-wrap",
                maxWidth: "350px",
              }}
            >
              {text}
            </p>
          </Box>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export const ChatInput = ({
  outerContainerWidthSize,
  scrollContainerWidthSize,
  setChats,
}) => {
  const [text, setText] = useState("");

  const handleEnterText = () => {
    setChats((chats) => [
      ...chats,
      {
        from: "me",
        pic: "",
        text,
        date: new Date(),
        name: "osas",
      },
    ]);
    setText("");
  };

  return (
    <Stack
      flexDirection={"column"}
      position="absolute"
      bottom="0"
      padding={"10px"}
      backgroundColor="#fff"
      width={[scrollContainerWidthSize?.width, outerContainerWidthSize?.width]}
      left={outerContainerWidthSize?.left}
    >
      <Stack
        padding="7px"
        borderRadius="10px"
        border="1px solid #B0B0B0"
        // position="absolute"
        bottom="0"
        flexDirection={"row"}
        alignItems={"center"}
        backgroundColor="#fff"
        width="100%"
        // width={[
        //   scrollContainerWidthSize?.width,
        //   outerContainerWidthSize?.width,
        // ]}
        // left={outerContainerWidthSize?.left}
        // padding="10px"
      >
        <TextareaAutosize
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
          style={{
            resize: "none",
            color: "#676767",
            bottom: "0",
            width: "inherit",
            outline: "none",
          }}
        />
        <Box
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          {...(text?.length > 3
            ? { backgroundColor: "#03989E", color: "#fff" }
            : { backgroundColor: "#E4E4E4" })}
          borderRadius={"8px"}
          p="10px"
          onClick={text?.length > 3 ? handleEnterText : null}
        >
          <FaArrowUp />
        </Box>
      </Stack>
    </Stack>
  );
};
