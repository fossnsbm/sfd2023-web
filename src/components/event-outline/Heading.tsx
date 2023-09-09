"use client"

import React from "react"
import { motion } from "framer-motion"

const Heading = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="origin-left"
      >
        <h1 className="text-white text-[1.8rem] py-3">Event Outline</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-gray py-3 md:w-1/2">
          SFD 2023 is a global celebration of open-source technology, featuring
          workshops, discussions, and a vision for a more inclusive and
          accessible digital future.
        </p>
      </motion.div>
    </>
  );
};

export default Heading;
