import './nav.css';
import NavBarImage from './NavBarIMG.png';

const Nav = () => {
    return (
        <nav className='NavBar'>
            <img src={NavBarImage} alt="Navigation Bar" className='NavBarIMG' />
            <div className='NavMenu'>
                <ul className='Navli'>
                    <li>
                        О КАФЕДРЕ
                        <ul className='PodL'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>
                    <li>
                        АБИТУРЕНТАМ
                        <ul className='PodL'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>
                    <li>
                        СТУДЕНТАМ
                        <ul className='PodL'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>
                    <li>
                        КОНТАКТЫ
                        <ul className='PodL'>
                            <li>Подпункт 1</li>
                            <li>Подпункт 2</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;