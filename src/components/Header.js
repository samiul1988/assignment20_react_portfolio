import React from 'react';
import Navigation from './Navigation';

const Header = ({ activeNavItem, setActiveNavItem }) => {
    return (
        <header className="header-container d-flex align-items-center">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-between align-items-center">
                        <div>
                            <h1 className="header-title">Samiul</h1>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 d-flex justify-content-between align-items-center">
                        <div className="w-100">
                            <Navigation activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
