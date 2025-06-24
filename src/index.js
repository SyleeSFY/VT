import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import '../src/styles/index.css';
import App from './App';
import Nav from './pages/nav/nav'
import Footer from './pages/footer/footer.jsx'


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
            <Footer />
        </BrowserRouter>
    </div>


);

