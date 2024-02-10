import { TiMessages } from "react-icons/ti"; 
import { AiFillUsb } from "react-icons/ai"; 
import { GiHouse } from "react-icons/gi"; 
import { GiFamilyHouse } from "react-icons/gi"; 
import { GiComputerFan } from "react-icons/gi"; 
import { GiBookmark } from "react-icons/gi"; 
import { GiMushroomHouse } from "react-icons/gi"; 
import { AiFillAliwangwang } from "react-icons/ai"; 
import * as React from "react";
import { motion } from "framer-motion";

export const navItems = [
  {
    name: "Home",
    icon: <GiHouse size={30}/>,
  },
  {
    name: "About",
    icon: <GiBookmark  size={30}/>,
  },
  {
    name: "Services",
    icon: <GiComputerFan   size={30}/>,
  },
  {
    name: "Portfolio",
    icon: <AiFillUsb  size={30}/>,
  },
  {
    name: "Contact",
    icon: <TiMessages  size={30}/>,
  },
]


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#E04700","#af3800","#afc1d6","#f2b880","#fbf2c0"];

export const MenuItem = ({ i, icon, name }) => {
  const style = { border: `2px solid ${colors[i]}`, color: colors[i] };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        {icon} {/* Render the passed icon */}
      </div>
      <div className="text-placeholder readingText" style={style}>{name}</div>
    </motion.li>
  );
};
