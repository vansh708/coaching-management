import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full relative z-50 shadow-md bg-white"
    >
      {/* Top Bar - Dark Navy */}
      <div className="bg-[#002147] text-white py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-3 md:mb-0">
          <div className="flex items-center justify-center gap-2">
            <span>🏢</span>
            <span className="opacity-80">Rathi Nagar, Amravati</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✉️</span>
            <span className="opacity-80 break-all">gloriousinstitute@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📞</span>
            <span className="opacity-80">+91 7767065499</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {/* REPLACE_WITH_YOUR_IMG_URL or link path for App Download */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="bg-[#ffb800] text-[#002147] font-semibold px-3 py-1.5 rounded-sm hover:bg-yellow-400 transition flex items-center gap-1 text-[10px] md:text-xs"
          >
            ⬇ Download App
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/register" className="bg-[#ffb800] text-[#002147] font-semibold px-3 py-1.5 rounded-sm hover:bg-yellow-400 transition flex items-center gap-1 text-[10px] md:text-xs">
              👤 Enroll Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Nav - White */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* REPLACE_WITH_YOUR_IMG_URL: Put your logo image path here */}
          <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold text-lg rounded-sm shadow-sm transition-transform group-hover:rotate-12 shrink-0">
            GI
          </div>
          <div>
             <div className="text-[#002147] font-bold text-xs sm:text-sm tracking-wide leading-tight line-clamp-1">Glorious Institute</div>
             <div className="text-[#ffb800] font-bold text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase line-clamp-1">OF COMMERCE</div>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold tracking-wider uppercase text-gray-700">
          <Link to="/" className="text-[#ffb800]">HOME</Link>
          <motion.a whileHover={{ y: -2 }} href="#about" className="hover:text-[#ffb800] transition">ABOUT GI</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#courses" className="hover:text-[#ffb800] transition">COURSES</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#teachers" className="hover:text-[#ffb800] transition">TEACHERS</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#gallery" className="hover:text-[#ffb800] transition">GALLERY</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#testimonials" className="hover:text-[#ffb800] transition">TESTIMONIAL</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#faqs" className="hover:text-[#ffb800] transition">FAQ'S</motion.a>
          <motion.a whileHover={{ y: -2 }} href="#contact" className="hover:text-[#ffb800] transition">CONTACT US</motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#002147] p-2 hover:bg-gray-100 rounded text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4 text-sm font-bold tracking-wider text-[#002147]">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#ffb800]">HOME</Link>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">ABOUT GI</a>
              <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">COURSES</a>
              <a href="#teachers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">TEACHERS</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">GALLERY</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">TESTIMONIAL</a>
              <a href="#faqs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">FAQ'S</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ffb800] transition">CONTACT US</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;
