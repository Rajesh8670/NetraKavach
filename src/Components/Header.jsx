import React from 'react';
import '../Styles/Header.css'

const Header = () => {
  return (
    <header className="top-header">
      <div className="brand">
        <div className="brand-icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>
        <div className="brand-text">
          <h1>IBAP</h1>
          <p>Intelligent Border Video Analytics</p>
        </div>
      </div>

      <div className="header-right">
        <div className="admin-profile">
          <div className="profile-circle">CO</div>
          <div className="admin-details">
            <h3>Control Room Officer</h3>
            <span>Operations</span>
          </div>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="header-time">
          <span>05 Sep 2026</span>
          <strong>21:14:32</strong>
        </div>
        <div className="live-header">
          <span></span>
          LIVE
        </div>
      </div>
    </header>
  );
};

export default Header;