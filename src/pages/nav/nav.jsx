import './nav.css';
import NavBarImage from './NavBarIMG.png'; // Импортируем изображение

const Nav = () => {
    return (
        <div className='NavBar'>
            <img src={NavBarImage} alt="Navigation Bar" className='NavBarIMG' />
            <div className='NavMenu'>
                <li>О КАФЕДРЕ</li>
                <li>АБИТУРЕНТАМ</li>
                <li>СТУДЕНТАМ</li>
                <li>КОНТАКТЫ</li>
            </div>
        </div>
    )
}
export default Nav;