import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const adminLinks = [
    { label: 'Dashboard Overview', path: '/admin/dashboard' },
    { label: 'Manage Students', path: '/admin/students' }
  ];

  const studentLinks = [
    { label: 'My Profile', path: '/student/dashboard' },
    { label: 'My Courses', path: '/student/courses' }
  ];

  const links = user?.role === 'admin' ? adminLinks : studentLinks;

  return (
    <div className="w-64 h-[calc(100vh-80px)] bg-surface-lowest border-r-[0.5px] border-outline-variant/30 hidden md:block select-none overflow-y-auto pt-8">
      <div className="px-8 pb-4 border-b-[0.5px] border-outline-variant/20 mb-6">
        <h4 className="text-on-surface-variant text-xs uppercase tracking-[0.2em] mb-2 font-sans font-semibold">Portal</h4>
        <h2 className="text-xl font-serif text-primary truncate">{user?.name}</h2>
      </div>
      
      <div className="flex flex-col gap-2 px-4">
        {links.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            end
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-surface-high border-l-2 border-primary text-primary shadow-[inset_0_0_20px_rgba(242,202,80,0.05)]' 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-high/50 border-l-2 border-transparent hover:border-outline-variant/50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
