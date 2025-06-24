import '../../styles/nav.css';
import { Link } from 'react-router-dom';
import NavBarImage from '../../components/Icons/NavBarIMG.png';

const Nav = () => {
    return (
        <nav className='NavBar'>
            <img src={NavBarImage} alt="Логотип кафедры" className='NavBarIMG' />
            <nav className='NavMenu'>
                <ul className='Navli'>

                    <Link to="/" className="NavLink"> <li className='NavItem Cursor'>О КАФЕДРЕ</li></Link>
                    <Link to="/educator" className="NavLink"> <li className='NavItem Cursor'>ПРЕПОДАВАТЕЛИ И СОТРУДНИКИ</li></Link>
                    <li className='NavItem NonCursor'>
                        АБИТУРЕНТАМ
                        <ul className='secondNav Cursor'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>
                    <li className='NavItem NonCursor'>
                        СТУДЕНТАМ
                        <ul className='secondNav Cursor'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>


                    <Link to="/test" className="NavLink"> <li className='NavItem Cursor'>КОНТАКТЫ</li></Link>

                </ul>
            </nav>
        </nav >
    )
}

export default Nav;