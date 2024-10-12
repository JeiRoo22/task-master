import React, { useState } from 'react';
import { login } from '../services/auth.services';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    setToken(null);
    event.preventDefault();
    try {
      const data = await login(username, password);
      setToken(data.token);
      setMessage('Login successful');
      onLoginSuccess(); // Call onLoginSuccess prop when login is successful
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="card" style={{ width: '24rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">INICIAR SESION</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                NOMBRE DE USUARIO
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                CONTRASEÑA
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              INICIAR SESION
            </button>
          </form>
          {message && (
            <div
              className={`alert mt-3 ${
                token ? 'alert-success' : 'alert-danger'
              }`}
            >
              {message}
            </div>
          )}
          {token && <div className="alert alert-info mt-3">Token: {token}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
