import React from 'react';
import '../Styles/DetectionStats.css'


const stats = [
  { number: 25, icon: 'fa-users', label: 'Person Detected', suspicious: false },
  { number: 9, icon: 'fa-truck', label: 'Truck Detected', suspicious: false },
  { number: 12, icon: 'fa-car', label: 'Cars Detected', suspicious: false },
  { number: 4, image: '/drone.png', label: 'Drones Detected', suspicious: false },
  { number: 2, icon: 'fa-triangle-exclamation', label: 'Suspicious Activity', suspicious: true },
];

const DetectionStats = () => {
  return (
    <section className="detection-stats">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`stat-box ${stat.suspicious ? 'suspicious-box' : ''}`}
        >
          <div className="stat-number">{stat.number}</div>
          <div className="stat-info">
            {stat.image ? (
              <img className="stat-icon-image" src={stat.image} alt="Drone" />
            ) : (
              <i className={`fa-solid ${stat.icon}`}></i>
            )}
            <h3>{stat.label}</h3>
          </div>
        </div>
      ))}
      <div className="date-box">
        <div>
          <span>05 Sep</span>
          <strong>2026</strong>
        </div>
        <i className="fa-solid fa-calendar-days"></i>
      </div>
    </section>
  );
};

export default DetectionStats;