import React from "react";

const Button = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 rounded-lg bg-Primary_main text-Text_main hover:bg-Primary_light"
    >
      {props.children}
    </button>
  );
};

export default Button;
