import React from 'react';
import '../Styles/ActiveSystems.css'

const ActiveSystems = () => {
  return (
    <div className="dashboard-panel active-panel">
      <div className="panel-title">
        <h2>
          <i className="fa-solid fa-server"></i> Active Systems
        </h2>
      </div>
      <div className="active-systems">
        <div className="system-item">
          <div>
            <i className="fa-solid fa-plane"></i> Drones
          </div>
          <strong>4</strong>
        </div>
        <div className="system-item">
          <div>
            <i className="fa-solid fa-video"></i> CCTV Cameras
          </div>
          <strong>10</strong>
        </div>
        <div className="system-item">
          <div>
            <i className="fa-solid fa-server"></i> AI Server
          </div>
          <strong className="system-on">ON</strong>
        </div>
        <div className="system-item">
          <div>
            <i className="fa-solid fa-shield-halved"></i> Security System
          </div>
          <strong className="system-on">ON</strong>
        </div>
      </div>
    </div>
  );
};

export default ActiveSystems;