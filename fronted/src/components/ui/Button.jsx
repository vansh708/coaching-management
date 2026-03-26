import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded text-sm uppercase tracking-widest font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-br from-primary to-primary-container text-surface-lowest hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:-translate-y-0.5",
    secondary: "bg-transparent border-[0.5px] border-outline-variant/30 text-primary hover:bg-primary/10 hover:border-primary/50",
    ghost: "text-on-surface hover:text-primary transition-colors"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
