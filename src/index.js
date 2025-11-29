import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import App from './App';
import Nav from './pages/nav/nav'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);