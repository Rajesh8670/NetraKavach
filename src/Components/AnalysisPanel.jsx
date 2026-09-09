import React from 'react';
import '../Styles/AnalysisPanel.css'
import detectionData from '../data/detectionData';

const detectionItems = Object.entries(detectionData).map(([id, item]) => ({ id, ...item }));

const chartCircumference = 360;
const totalDetections = detectionItems.reduce((total, item) => total + item.value, 0);

const chartSegments = detectionItems.reduce((segments, item) => {
  const angle = (item.value / totalDetections) * chartCircumference;
  const previousOffset = segments.length > 0
    ? segments[segments.length - 1].offset + segments[segments.length - 1].angle
    : 0;

  segments.push({ ...item, angle, offset: previousOffset });
  return segments;
}, []);

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
            {chartSegments.map((segment) => (
              <circle
                key={segment.id}
                cx="50"
                cy="50"
                r="40"
                stroke={segment.color}
                pathLength={chartCircumference}
                strokeDasharray={`${segment.angle} ${chartCircumference}`}
                strokeDashoffset={-segment.offset}
              />
            ))}
          </svg>
          <div className="chart-center">
            <strong>{totalDetections}</strong>
            <span>Total</span>
          </div>
        </div>
        <div className="analysis-legend">
          {detectionItems.map((item) => (
            <div key={item.id}>
              <span
                className={`legend-dot ${item.id}`}
                style={{ backgroundColor: item.color }}
              ></span>
              {item.label}{' '}
              <strong style={{ marginLeft: 'auto', color: item.color }}>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPanel;