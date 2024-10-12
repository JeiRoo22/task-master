import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Nota la diferencia en la importación
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Renderiza la aplicación
root.render(
  <Router>
    <App />
  </Router>
);
