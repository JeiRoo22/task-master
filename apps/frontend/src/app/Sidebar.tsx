import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-end" style={{ width: '250px' }}>
      <div className="list-group list-group-flush">
        <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Home</Link>
        <Link to="/dashboard/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
        <Link to="/dashboard/settings" className="list-group-item list-group-item-action bg-light">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
