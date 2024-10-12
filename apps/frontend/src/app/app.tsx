import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Dashboard from './dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" />
          ) : (
            <>
              <h1 className="text-center mb-5">Portal Autenticación</h1>
              <Register />
              <Login onLoginSuccess={handleLoginSuccess} />
            </>
          )
        }
      />
      <Route
        path="/dashboard/*"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
