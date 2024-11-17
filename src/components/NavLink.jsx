import React from "react";

const NavLink = ({ title, path }) => {
  return (
    <>
      <li className="text-lg hover:text-[#AA6666] cursor-pointer hover:underline underline-offset-8 transition-all duration-200 ease-in">
        <a href={path}>{title}</a>
      </li>
    </>
  );
};

export default NavLink;
