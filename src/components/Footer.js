import React from 'react';

const Footer = () => {
    return ( 
        <footer className="footer-container d-flex justify-content-center my-4">
            <div className="mx-3 footer-item">
                <a 
                    href="https://github.com/samiul1988" 
                    target="_blank"
                    rel="noopener noreferrer"
                > <i className="fab fa-2x fa-github"></i>
                </a>
            </div>
            <div className="mx-3 footer-item">
                <a 
                    href="https://www.linkedin.com/in/samiul-choudhury/" 
                    target="_blank"
                    rel="noopener noreferrer"
                > <i className="fab fa-2x fa-linkedin"></i>
                </a>
            </div>
            <div className="mx-3 footer-item">
                <a 
                    href="https://twitter.com/samiulHayder" 
                    target="_blank"
                    rel="noopener noreferrer"
                > <i className="fab fa-2x fa-twitter"></i>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;