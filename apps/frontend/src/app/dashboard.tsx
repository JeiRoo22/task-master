import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid d-flex vh-100">
      <Sidebar />
      <div className="w-100">
        <Navbar />
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
