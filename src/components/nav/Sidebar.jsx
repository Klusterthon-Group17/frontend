import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RouteEnum } from "../../constant/RouteConstant";
import { GoSignOut } from "react-icons/go";
import { FiEdit } from "react-icons/fi";
import { IconButton } from "@mui/material";
import SignoutModal from "../../common/SignoutModal";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <aside className="hidden h-full w-[20%] bg-Text_main border-r border-Primary_main md:block">
      <div className="flex py-10 px-5 justify-between items-center">
        <h1 className="font-bold text-2xl">Doc ADA</h1>
        <IconButton>
          <FiEdit />
        </IconButton>
      </div>
      <div className="flex flex-col justify-between p-5">
        <div className="flex flex-col gap-5">
          {LINKS.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) => {
                return isActive
                  ? "flex items-center gap-2 px-3 py-3 rounded-lg bg-Primary_main text-Text_main hover:bg-Primary_light"
                  : "flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-Primary_lighter hover:text-Text_main";
              }}
            >
              {link.icon} {link.name}
            </NavLink>
          ))}
        </div>

        <div className="py-20 mt-[120px]">
          <button
            onClick={handleClickOpen}
            className="flex w-full items-center gap-2 px-3 py-3 text-Red rounded-lg hover:bg-Body"
          >
            <GoSignOut /> Sign out
          </button>
          <SignoutModal open={open} onClose={handleClose} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const LINKS = [
  {
    name: "Home",
    path: RouteEnum.CHAT,
    icon: <GoHome />,
  },
  {
    name: "Chat history",
    path: RouteEnum.HISTORY,
    icon: <GoClock />,
  },
  {
    name: "Settings",
    path: RouteEnum.SETTINGS,
    icon: <IoSettingsOutline />,
  },
];
