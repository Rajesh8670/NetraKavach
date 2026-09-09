import React from 'react';
import '../Styles/DetectionStats.css'
import detectionData from '../data/detectionData';

const stats = Object.entries(detectionData).map(([id, item]) => ({
  id,
  number: item.value,
  icon: item.icon,
  image: item.image,
  label: item.statusLabel,
  suspicious: item.suspicious,
}));

const DetectionStats = () => {
  return (
    <section className="detection-stats">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
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