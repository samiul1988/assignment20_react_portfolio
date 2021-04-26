import React from 'react';

const Navigation = ({ activeNavItem, setActiveNavItem }) => {
    const handleClick = (e) => {
        setActiveNavItem(e.target.getAttribute('name'));
    }

    return (
        <nav className="navbar navbar-expand .d-lg-flex justify-content-end">
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={`mx-3 nav-item ${(activeNavItem === "about") && 'nav-item-active'}`}>
                        <span name="about" onClick={handleClick}>About me</span>
                    </li>
                    <li className={`mx-3 nav-item ${(activeNavItem === "portfolio") && 'nav-item-active'}`}>
                        <span name="portfolio" onClick={handleClick}>Portfolio</span>
                    </li>
                    <li className={`mx-3 nav-item ${(activeNavItem === "contact") && 'nav-item-active'}`}>
                        <span name="contact" onClick={handleClick}>Contact</span>
                    </li>
                    <li className={`mx-3 nav-item ${(activeNavItem === "resume") && 'nav-item-active'}`}>
                        <span name="resume" onClick={handleClick}>Resume</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;