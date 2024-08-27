import React from 'react';
import NavbarComponent from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssetInventoryPage from './pages/AssetInventoryPage';
import AssetTrackingPage from './pages/AssetTrackingPage';
import AssetMaintenancePage from './pages/AssetMaintenancePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<AssetInventoryPage />} />
        <Route path="/tracking" element={<AssetTrackingPage />} />
        <Route path="/maintenance" element={<AssetMaintenancePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
