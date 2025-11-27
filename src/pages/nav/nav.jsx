import '../../styles/nav.css';
import { Link } from 'react-router-dom';
import NavBarImage from '../../components/Icons/NavBarIMG.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='NavBar'>
            <img src={NavBarImage} alt="Логотип кафедры" className='NavBarIMG' />
            

            <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`NavMenu ${isMenuOpen ? 'mobile-open' : ''}`}>
                <ul className='Navli'>
                    <Link to="/" className="NavLink"> 
                        <li className='NavItem Cursor'>О КАФЕДРЕ</li>
                    </Link>
                    <Link to="/discipline" className="NavLink"> 
                        <li className='NavItem Cursor'>ДИСЦИПЛИНЫ</li>
                    </Link>
                    <Link to="/educator" className="NavLink"> 
                        <li className='NavItem Cursor'>ПРЕПОДАВАТЕЛИ И СОТРУДНИКИ</li>
                    </Link>
                    <Link to="/contacts" className="NavLink"> 
                        <li className='NavItem Cursor'>КОНТАКТЫ</li>
                    </Link>
                </ul>
            </nav>
        </nav>
    )
}

export default Nav;