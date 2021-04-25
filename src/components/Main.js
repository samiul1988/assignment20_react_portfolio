import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Main = ({ activeNavItem = 'about'}) => {
    // this function returns appropriate page content based on active nav item
    const generateContent = () => {
        let content;
        switch (activeNavItem) {
            case 'portfolio':
                content = <Portfolio />;
                break;
            case 'contact':
                content = <Contact />;
                break;
            case 'resume':
                content = <Resume />;
                break;
            default:
                content = <About />;
        }
        return content;
    }

    return ( 
        <main className="main-container container mt-4 color-sec">
            <div className="row">
                <div className="col">
                    { generateContent() } 
                </div>
            </div>
        </main>
     );
}
 
export default Main;