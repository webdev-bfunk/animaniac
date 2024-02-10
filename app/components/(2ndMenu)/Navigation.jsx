import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { GiMushroomHouse } from "react-icons/gi";
import { AiFillAliwangwang } from "react-icons/ai";
import { navItems } from "./MenuItem";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {navItems.map((item, index) => (
      <MenuItem key={index} i={index} icon={item.icon} name={item.name} />
    ))}
  </motion.ul>
);
