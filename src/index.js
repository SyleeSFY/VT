import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import Nav from './pages/nav/nav'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Nav />
        <div className=' container'>
                    <div className='containerBg'>
            <App />
        </div>
        </div>

    </div>


); 

