import React from "react";
import '../../styles/footer.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">




            </div>

            <div className="footer-bottom">
                <p>© {currentYear}. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;