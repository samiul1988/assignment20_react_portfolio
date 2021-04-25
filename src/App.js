import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { capitalizeFirstLetter } from './utils/helper'; 

function App() {
    const [ activeNavItem, setActiveNavItem ] = useState('about'); // state initialization
    
    // updates document title with current nav item 
    useEffect(() => {
        document.title = `Samiul's Portfolio - ${capitalizeFirstLetter(activeNavItem)}`;
      }, [activeNavItem]);

    return (
        <div className=" app-container">
            <Header activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem}/>
            <Main activeNavItem={activeNavItem}/>
            <Footer />
        </div>
    );
}

export default App;