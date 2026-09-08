import React from 'react';
import '../Styles/QuickActions.css'

const QuickActions = () => {
  return (
    <div className="dashboard-panel quick-panel">
      <div className="panel-title">
        <h2>
          <i className="fa-solid fa-bolt"></i> Quick Actions
        </h2>
      </div>
      <div className="quick-actions">
        <button>
          <i className="fa-solid fa-file-lines"></i> Generate Report
        </button>
        <button>
          <i className="fa-solid fa-bell"></i> Emergency Alert
        </button>
        <button>
          <i className="fa-solid fa-video"></i> View All Cameras
        </button>
      </div>
    </div>
  );
};

export default QuickActions;