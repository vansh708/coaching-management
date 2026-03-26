import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
        
        {/* Logo and Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-2 mb-6 bg-white w-max p-2 rounded shadow-sm hover:shadow-md transition">
            {/* REPLACE_WITH_YOUR_IMG_URL: Put your logo image path here */}
            <div className="w-10 h-10 bg-[#002147] text-white flex items-center justify-center font-bold font-serif shadow-inner">
              GI
            </div>
            <div>
              <h2 className="text-[#002147] font-bold text-sm leading-tight m-0">Glorious Institute</h2>
              <span className="text-[#ffb800] font-bold text-[10px] uppercase">OF COMMERCE</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-loose">
            Glorious Institute teaching team concentrates on specific objectives without distraction, resulting in massive building with all amenities. Without students support, we can't reach upto our dream. Today many students are relishing educational bites In GI.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-white text-lg font-bold mb-6">LINKS</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-300">
            {[
               { text: 'Courses', link: '#courses' },
               { text: 'Gallery', link: '#gallery' },
               { text: 'Terms & Condition', link: '#terms' },
               { text: 'Privacy Policy', link: '#privacy' },
               { text: 'Refund & Cancellation', link: '#refund' },
            ].map((item, idx) => (
              <motion.li key={idx} whileHover={{ x: 5 }}>
                 <a href={item.link} className="hover:text-[#ffb800] transition-colors flex items-center gap-2">
                    <span className="text-[#ffb800]">•</span> {item.text}
                 </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Opening Hours */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white text-lg font-bold mb-6">OPENING HOURS</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-300">
            <li className="flex items-start gap-2 hover:text-white transition">
               <span className="text-[#ffb800] mt-1">•</span> 
               <div>
                  <div>Mon - Tues :</div>
                  <div className="text-white font-medium">8.00 Am - 10.00 Pm</div>
               </div>
            </li>
            <li className="flex items-start gap-2 hover:text-white transition">
               <span className="text-[#ffb800] mt-1">•</span> 
               <div>
                  <div>Wednes - Thurs :</div>
                  <div className="text-white font-medium">8.00 Am - 6.00 Pm</div>
               </div>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition text-gray-400">
               <span className="text-gray-500">•</span> Sun : Closed
            </li>
          </ul>
        </motion.div>

        {/* Address */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white text-lg font-bold mb-6">ADDRESS</h3>
          <ul className="flex flex-col gap-6 text-sm text-gray-300">
            <motion.li whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
               <div className="mt-1 text-xl">📱</div>
               <div>
                  <div className="font-semibold text-white mb-1">MOBILE</div>
                  <div className="hover:text-[#ffb800] transition">+91 7767065499</div>
               </div>
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
               <div className="mt-1 text-xl">✉️</div>
               <div>
                  <div className="font-semibold text-white mb-1">EMAIL</div>
                  <div className="hover:text-[#ffb800] transition">gloriousinstitute@gmail.com</div>
               </div>
            </motion.li>
            <motion.li whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
               <div className="mt-1 text-xl">🏢</div>
               <div>
                  <div className="font-semibold text-white mb-1">OFFICE</div>
                  <div className="hover:text-[#ffb800] transition leading-relaxed">glorious institute, near ekta mahila mandal ground, rathi nagar, amravati - 444603</div>
               </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-700 bg-[#001832] py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© Copyright 2026. Glorious Institute | Powered By <motion.span whileHover={{ color: '#ffb800', cursor: 'pointer' }} className="text-[#ffb800] font-semibold transition">Webmedia</motion.span></p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="text-white">FOLLOW US @</span>
            <motion.a whileHover={{ y: -2, color: '#ffb800' }} href="#" className="transition">Facebook</motion.a>
            <motion.a whileHover={{ y: -2, color: '#ffb800' }} href="#" className="transition">YouTube</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
