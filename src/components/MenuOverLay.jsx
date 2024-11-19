import React from "react";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

const MenuOverLay = ({ links, isMenuOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <motion.ul className="flex flex-col gap-3 items-center pb-10 sm:hidden">
          {links.map((link, index) => {
            return <NavLink key={index} title={link.title} path={link.path} />;
          })}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuOverLay;
