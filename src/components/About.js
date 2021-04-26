import React from 'react';

const About = () => {
    return (
        <section className="content-font container">
            <div>
                <h1>About me</h1>
            </div>
            <div className="img-containers mt-4 mb-4">
                <img 
                    className="img-container img-fluid" 
                    alt="profile pic of Samiul"
                    src={require('../assets/images/profile-img.jpg').default}>
                </img>
            </div>
            <p>
                This is Samiul Choudhury. I have completed MSc in Electrical Engineering
                from the University of Calgary, Canada, and have been working as an Acoustical
                Consultant (P.Eng.) for over six years. I've been involved in developing desktop templates
                and web applications for the company using C++, Visual Basic, Python, HTML/CSS/Javascript,
                React and NodeJS. I've exposure to web development as a solo developer and self-learner,
                so this bootcamp will help me formalizing my learnings, boosting up my confidence, and
                obviously learning new stuffs (which is an ever outstanding task in this area).
                Most of my developed applications are internal (for my company only). That's why I am sharing
                one of my public projects in the work section. For now, I don't have much more to say, so I'm filling the next paragrpah with Lorems :).
                Hopefully I'll populate these as the course progresses.
                </p>
            <br />
            <p>
                Lorem ipsum, dolor sit amet sit amet consectetur adipisicing elit. In maiores modi minus facere
                praesentium? Reprehenderit fuga dolorum iure recusandae magnam est
                provident ducimus, nesciunt non ipsam laborum. Mollitia, autem facere!consectetur adipisicing elit.
                Qui quod nemo quisquam et facilis molestiae, aliquid soluta
                asperiores ipsam nam reprehenderit obcaecati, eligendi nesciunt
                quidem magni. Nihil, expedita temporibus. 
                </p>
        </section>
    );
}

export default About;