"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-gray-950 sm:min-h-[350px] lg:min-h-[500px] p-4 md:p-12"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
