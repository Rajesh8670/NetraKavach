import { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import DetectionStats from './Components/DetectionStats';
import CameraSection from './Components/CameraSection';
import BottomGrid from './Components/BottomGrid';
import Login from './Components/Login';
import './App.css';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-content">
        <DetectionStats />
        <CameraSection />
        <BottomGrid />
      </main>
    </>
  );
};

export default App;