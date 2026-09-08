import React from 'react';
import '../Styles/BottomGrid.css'
import AnalysisPanel from './AnalysisPanel';
import QuickActions from './QuickActions';
import ActiveSystems from './ActiveSystems';
import MapView from './MapView';


const BottomGrid = () => {
  return (
    <section className="bottom-grid">
      <AnalysisPanel />
      <QuickActions />
      <ActiveSystems />
      <MapView />
    </section>
  );
};

export default BottomGrid;