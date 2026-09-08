import React from 'react';
import '../Styles/AnalysisPanel.css'

const AnalysisPanel = () => {
  return (
    <div className="dashboard-panel analysis-panel">
      <div className="panel-title">
        <h2>
          <i className="fa-solid fa-chart-pie"></i> Detection Analysis
        </h2>
      </div>
      <div className="analysis-content">
        <div className="donut-chart">
          <svg viewBox="0 0 100 100">
            {/* People: 25/52 = 48.1% → 173.1° */}
            <circle cx="50" cy="50" r="40" stroke="#4da3ff"
              strokeDasharray="173.1 360" strokeDashoffset="0" />
            {/* Cars: 12/52 = 23.1% → 83.1° */}
            <circle cx="50" cy="50" r="40" stroke="#3ddc84"
              strokeDasharray="83.1 360" strokeDashoffset="-173.1" />
            {/* Trucks: 9/52 = 17.3% → 62.3° */}
            <circle cx="50" cy="50" r="40" stroke="#ff6b35"
              strokeDasharray="62.3 360" strokeDashoffset="-256.2" />
            {/* Drones: 4/52 = 7.7% → 27.7° */}
            <circle cx="50" cy="50" r="40" stroke="#feca57"
              strokeDasharray="27.7 360" strokeDashoffset="-318.5" />
            {/* Suspicious: 2/52 = 3.85% → 13.85° */}
            <circle cx="50" cy="50" r="40" stroke="#ff4757"
              strokeDasharray="13.85 360" strokeDashoffset="-346.2" />
          </svg>
          <div className="chart-center">
            <strong>52</strong>
            <span>Total</span>
          </div>
        </div>
        <div className="analysis-legend">
          <div>
            <span className="legend-dot people"></span> People{' '}
            <strong style={{ marginLeft: 'auto', color: '#4da3ff' }}>25</strong>
          </div>
          <div>
            <span className="legend-dot cars"></span> Cars{' '}
            <strong style={{ marginLeft: 'auto', color: '#3ddc84' }}>12</strong>
          </div>
          <div>
            <span className="legend-dot trucks"></span> Trucks{' '}
            <strong style={{ marginLeft: 'auto', color: '#ff6b35' }}>9</strong>
          </div>
          <div>
            <span className="legend-dot drones"></span> Drones{' '}
            <strong style={{ marginLeft: 'auto', color: '#feca57' }}>4</strong>
          </div>
          <div>
            <span className="legend-dot suspicious"></span> Suspicious{' '}
            <strong style={{ marginLeft: 'auto', color: '#ff4757' }}>2</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;