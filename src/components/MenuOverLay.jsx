import React from "react";
import NavLink from "./NavLink";

const MenuOverLay = ({ links }) => {
  return (
    <>
      <ul className="flex flex-col gap-3 items-center pb-10 sm:hidden">
        {links.map((link, index) => {
          return <NavLink key={index} title={link.title} path={link.path} />;
        })}
      </ul>
    </>
  );
};

export default MenuOverLay;
