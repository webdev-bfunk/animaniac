'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDownCircle } from 'react-icons/ai';

const DownArrow = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -5, 0], // Use an array to create an oscillating effect
      }}
      transition={{
        y: {
          duration: 2, // Adjust the duration to control the speed of the hover
          repeat: Infinity, // Keeps the animation looping
          repeatType: "reverse", // Reverses the animation on each iteration
        },
      }}
      className="mt-8"
    >
      <AiOutlineDownCircle className="h-10 w-10 text-orange-400" />
    </motion.div>
  );
};

export default DownArrow;
