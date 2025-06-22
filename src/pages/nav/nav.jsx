import '../../styles/nav.css';
import NavBarImage from '../../components/Icons/NavBarIMG.png';

const Nav = () => {
    return (
        <nav className='NavBar'>
            <img src={NavBarImage} alt="Логотип кафедры" className='NavBarIMG' />
            <nav className='NavMenu'>
                <ul className='Navli'>
                    <li className='NavItem Cursor'>
                        О КАФЕДРЕ
                    </li>
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
                    <li className='NavItem Cursor'>
                        КОНТАКТЫ

                    </li>
                </ul>
            </nav>
        </nav >
    )
}

export default Nav;