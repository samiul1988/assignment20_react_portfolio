import React from 'react';

const Resume = () => {
    return ( 
        <section className="content-font container">
            <div>
                <h1>Resume</h1>
            </div>
            <div className="my-4">
                <p className="resume-link">{`Download my `}
                    <a
                        href={require('../assets/docs/Resume_Choudhury.pdf').default} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >resume</a>
                </p>
            </div>
            <div >
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div >
                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>REST API</li>
                </ul>
            </div>
        </section>
     );
}
 
export default Resume;