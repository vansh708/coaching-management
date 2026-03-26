import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div 
      whileHover={hover ? { y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-surface-high border-[0.5px] border-outline-variant/20 rounded-xl p-6 relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Subtle top highlight gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
