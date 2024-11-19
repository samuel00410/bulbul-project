import React, { useState } from "react";
import NavLink from "./NavLink";
import logo from "../assets/Images/logo.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import MenuOverLay from "./MenuOverLay";

const NavLinks = [
  { title: "白頭翁的特性", path: "/#" },
  { title: "白頭翁的故事", path: "/#" },
  { title: "白頭翁的美照", path: "/#" },
  { title: "白頭翁的危機", path: "/#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sm:w-[345px] z-10 shadow-lg">
      <div className="flex sm:flex-col sm:justify-start items-center justify-evenly px-8 py-8 sm:pt-20    sm:relative">
        {/* 選單icon (手機以上不顯示)*/}
        <div className="block sm:hidden">
          {isMenuOpen ? (
            <button onClick={() => setIsMenuOpen((prev) => !prev)}>
              <IoCloseSharp size={25} />
            </button>
          ) : (
            <button>
              <RiMenu2Line
                onClick={() => setIsMenuOpen((prev) => !prev)}
                size={25}
              />
            </button>
          )}
        </div>

        <div>
          <h1 className="text-xl font-bold">白頭翁不吃小米</h1>
          <ul className="hidden sm:flex flex-col gap-3 mt-24 text-center">
            {NavLinks.map((link, index) => {
              return (
                <NavLink key={index} title={link.title} path={link.path} />
              );
            })}
          </ul>
        </div>

        {/* 鳥icon */}
        <div className="w-[35px] h-[35px] sm:w-[100px] sm:h-[100px] sm:absolute sm:top-10 -right-12">
          {/* <img src={logo} alt="logo" /> */}
          <div className="bird-icon">
            <div className="bird-head"></div>
            <div className="bird-eye"></div>
            <div className="bird-mouth"></div>
            <div className="bird-body"></div>
          </div>
        </div>
      </div>

      {/* 手機選單 */}
      {isMenuOpen && <MenuOverLay links={NavLinks} isMenuOpen={isMenuOpen} />}
    </nav>
  );
};

export default Navbar;
