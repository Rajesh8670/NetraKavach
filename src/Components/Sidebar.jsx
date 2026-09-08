import React, { useState } from 'react';
import '../Styles/Sidebar.css'

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');

  const navItems = [
    { label: 'Dashboard', icon: 'fa-house' },
    { label: 'Warnings', icon: 'fa-triangle-exclamation' },
    { label: 'Live Monitoring', icon: 'fa-video' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={active === item.label ? 'active' : ''}
            onClick={() => setActive(item.label)}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <a href="#">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;