import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const LandingPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
        {/* REPLACE_WITH_YOUR_IMG_URL */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[20s] hover:scale-100" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[#002147]/70 mix-blend-multiply"></div>
        </div>
        
        <button className="absolute left-4 z-20 text-white text-3xl opacity-50 hover:opacity-100 transition hover:-translate-x-1">❮</button>
        <button className="absolute right-4 z-20 text-white text-3xl opacity-50 hover:opacity-100 transition hover:translate-x-1">❯</button>

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 text-center text-white px-4 max-w-4xl max-h-min mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0em' }} 
            animate={{ opacity: 1, letterSpacing: '0.2em' }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="font-semibold text-sm md:text-base uppercase mb-4"
          >
            REACH YOUR CAREER
          </motion.p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Learn From Best Coaching Academy</h1>
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#courses" 
            className="inline-block bg-[#ffb800] text-[#002147] font-bold py-3 px-8 text-sm uppercase shadow-lg shadow-[#ffb800]/20"
          >
            View Courses
          </motion.a>
        </motion.div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        {/* REPLACE_WITH_YOUR_IMG_URL */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}
          className="flex-1 w-full relative group"
        >
          <div className="absolute inset-4 border-2 border-[#ffb800] rounded-md -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
            alt="Students" 
            className="w-full h-auto object-cover rounded-md shadow-xl"
          />
        </motion.div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}
          className="flex-1"
        >
          <p className="text-gray-500 font-semibold uppercase text-sm mb-2 tracking-wide">INTRODUCTION</p>
          <h2 className="text-[#002147] text-3xl md:text-4xl font-bold mb-6">Welcome To Glorious Institute</h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
            Single confident step culminates into iconic educational emperor, it's true about Glorious Institute. Institute starts from 2 rooms where we live and educate students. Desire is the starting point of all achievement, not a hope, not a wish, but keep a pulsating desire which transcends everything. Let Vaibhav Wasankar guide you to excellence.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm">
             We have numbers of experts in subjects. All have teaching experience and be recognized by an EFA member state. Advanced study plans/ programs designed for students to prepare students to become highly-skilled.
          </p>
          <motion.button 
             whileHover={{ backgroundColor: '#002147', color: '#fff' }}
             whileTap={{ scale: 0.95 }}
             className="border-2 border-[#002147] text-[#002147] font-bold py-2.5 px-8 uppercase text-sm transition-colors"
          >
            Read More
          </motion.button>
        </motion.div>
      </section>

      {/* 3. FEATURES CARDS SECTION */}
      <section className="bg-white pb-20 px-4 md:px-8 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
             { icon: "📖", title: "EXPERT FACULTY", desc: "FIND THE RIGHT INSTRUCTOR FOR YOU" },
             { icon: "💻", title: "ONLINE LEARNING", desc: "INCREASE YOUR PERSONAL EXPERTISE" },
             { icon: "🌐", title: "ADVANCED METHODS", desc: "EXPLORE A VARIETY OF FRESH TOPICS" },
          ].map((feat, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex flex-col items-center text-center group cursor-default"
             >
                <div className="text-[#002147] text-4xl mb-4 group-hover:text-[#ffb800] group-hover:scale-110 transition-all">{feat.icon}</div>
                <h3 className="text-[#002147] font-bold text-lg mb-2 group-hover:text-[#002147]">{feat.title}</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{feat.desc}</p>
             </motion.div>
          ))}
        </div>
      </section>

      {/* 4. POPULAR COURSES SECTION */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-3xl md:text-4xl text-[#002147] font-bold mb-4">Our Popular Courses</motion.h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once:true }} transition={{ duration: 0.6 }} className="h-1 bg-[#ffb800] mx-auto mb-6"></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            {[
              { type: 'STANDARD', subtitle: '8th, 9th, 10th Subjects', title: '8th, 9th, 10th Standard', desc: 'These streams are very important & require the students to score well in the subjects.', border: 'border-b-0' },
              { type: 'POLYTECHNIC', subtitle: 'All Subjects for Diploma', title: 'Polytechnic', desc: 'Diploma in Engineering courses, Other vocational courses offered after 11th & 12th.', border: 'border-b-8 border-[#ffb800]' },
              { type: 'ENGINEERING', subtitle: 'All Engineering Courses', title: 'Engineering', desc: 'These academic programs are 4 years long. The course content is technical in nature.', border: 'border-b-8 border-gray-400' },
            ].map((course, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                 className="bg-white shadow-lg flex flex-col group cursor-pointer"
               >
                 <div className="h-40 relative overflow-hidden">
                   <div className={`absolute inset-0 bg-[#002147] flex items-center justify-center p-6 text-white text-center ${course.border} transition-transform group-hover:scale-105 duration-500`}>
                      <div>
                        <h3 className="font-bold text-xl uppercase mb-1 drop-shadow-md">{course.type}</h3>
                        <p className="text-xs text-gray-300 drop-shadow-md">{course.subtitle}</p>
                      </div>
                   </div>
                 </div>
                 <div className="p-8 flex-1 flex flex-col">
                   <h3 className="text-[#002147] font-bold text-xl mb-4 group-hover:text-[#ffb800] transition-colors">{course.title}</h3>
                   <p className="text-gray-500 text-sm mb-8 flex-1 leading-relaxed">{course.desc}</p>
                   <div className="flex justify-end">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#ffb800] text-[#002147] text-xs font-bold py-2 px-6 rounded-full uppercase shadow-md shadow-[#ffb800]/20 hover:bg-yellow-400 transition">
                        ENROLL NOW
                      </motion.button>
                   </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STATS BANNER */}
      <section className="bg-[#002147] py-16 relative overflow-hidden">
         <motion.div 
            animate={{ x: ['-10%', '10%'] }} transition={{ repeat: Infinity, duration: 10, ease: "linear", repeatType: 'reverse' }}
            className="absolute top-0 left-0 w-[500%] h-full bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20 pointer-events-none mix-blend-overlay"
         />
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center text-white divide-x-0 md:divide-x divide-white/20">
               {[
                 { icon: "🎓", num: 1059, text: "Toppers Student" },
                 { icon: "🏫", num: 8, text: "Teachers" },
                 { icon: "👥", num: 8970, text: "Students Enrolled" },
                 { icon: "📚", num: 20, text: "Cources" }
               ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
                     <div className="text-[#ffb800] text-4xl mb-3 flex justify-center">{stat.icon}</div>
                     <div className="text-4xl font-bold mb-1">{stat.num}</div>
                     <div className="text-xs uppercase tracking-widest font-semibold text-gray-300">{stat.text}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. WHY JOIN GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 text-center bg-white">
         <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-3xl md:text-4xl text-[#002147] font-bold mb-4">Why To Join Glorious Institute</motion.h2>
         <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once:true }} transition={{ duration: 0.6 }} className="h-1 bg-[#ffb800] mx-auto mb-6"></motion.div>
         <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm px-4">
            Under the guidance of Vaibhav Wasankar, it is a leading educational interactive flat panel which is a highly effective collaborative device to facilitate classroom teaching and digital learning.
         </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2">
            {[
               "Best Result With Minimum Fees", "Digital Education With Quality", "Free Test Series & Free Demo",
               "Offline & Online Classes", "Parking Area, Security Guard", "CCTV Camera, Water",
               "Study Room, Automatic Fire Alarm System", "Xerox Center, Computer Lab"
            ].map((feature, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: (idx % 4) * 0.1 }}
                   whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                   className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.06)] p-6 h-32 flex items-center justify-center rounded relative overflow-hidden group"
                >
                  {idx === 1 ? (
                    <>
                       {/* REPLACE_WITH_YOUR_IMG_URL */}
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-multiply transition duration-700 group-hover:scale-110 group-hover:opacity-50"></div>
                       <div className="absolute inset-0 bg-[#002147]/80"></div>
                       <h4 className="font-bold text-white relative z-10 text-sm md:text-base group-hover:text-[#ffb800] transition-colors">{feature}</h4>
                    </>
                  ) : (
                    <h4 className="text-[#002147] font-bold text-sm md:text-base group-hover:text-[#ffb800] transition-colors">{feature}</h4>
                  )}
                </motion.div>
            ))}
         </div>
      </section>

      {/* 7. STUDENTS REVIEW */}
      <section id="testimonials" className="bg-[#002147] py-20 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#ffb800] blur-[150px] opacity-10 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 md:px-8 text-white relative z-10">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="text-3xl md:text-4xl text-white font-bold mb-4">Students Review</motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once:true }} transition={{ duration: 0.6 }} className="h-1 bg-[#ffb800] mx-auto mb-6"></motion.div>
            <p className="text-gray-300 text-sm mb-16">What student says about us under Vaibhav Wasankar sir's guidance</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {[
                 { quote: "I think the experience and the exposure to different teaching styles has given me a different perspective about life and what I really want to do.", author: "Paol Druva", role: "Poly Student" },
                 { quote: "It was my immense luck and fortune to be part of Glorious Institute where I can grow.", author: "Vaibhav Fuke", role: "Chemistry Student" },
               ].map((review, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: i === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.6 }}
                     whileHover={{ y: -5 }}
                     className="border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left rounded-sm relative group cursor-default shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all"
                  >
                     <div className="absolute top-6 left-6 text-white/5 text-8xl font-serif group-hover:text-[#ffb800]/10 transition-colors">"</div>
                     {/* REPLACE_WITH_YOUR_IMG_URL */}
                     <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded shrink-0 shadow-inner relative z-10 flex items-center justify-center text-gray-500 overflow-hidden">
                       <span className="text-3xl">👤</span>
                     </div>
                     <div className="relative z-10 flex-1">
                        <p className="text-sm leading-relaxed mb-6 italic text-gray-200">
                           {review.quote}
                        </p>
                        <h4 className="font-bold text-lg mb-1">{review.author}</h4>
                        <p className="text-[#ffb800] text-xs font-bold uppercase tracking-wider">{review.role}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default LandingPage;
