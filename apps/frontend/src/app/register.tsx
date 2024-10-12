import React, { useState } from 'react';
import { register } from '../services/auth.services';

const Register: React.FC = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await register(username, password);
      setMessage('USUARIO REGISTRDO CORRECTAMENTE');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '24rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center">REGISTRO USUARIOS</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usernameR" className="form-label">
                NOMBRE USUARIO
              </label>
              <input
                type="text"
                id="usernameR"
                className="form-control"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordR" className="form-label">
                CONTRASEÑA
              </label>
              <input
                type="passwordR"
                id="passwordR"
                className="form-control"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3">
              REGISTRAR
            </button>
          </form>
          {message && (
            <div className={`alert mt-3 ${message.includes('CORRECTAMENTE') ? 'alert-success' : 'alert-danger'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
