import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import App from './App';
import Nav from './pages/nav/nav'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <Nav />
            <div className=' container'>
                <div className='containerBg'>
                    <App />
                </div>
            </div>
        </BrowserRouter>
    </div>


);

