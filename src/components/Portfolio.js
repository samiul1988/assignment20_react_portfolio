import React, { useState } from 'react';
import Project from './Project';

const Portfolio = () => {
    const [projectList] = useState([
        {
            project_title: "Woof",
            project_tag:"MERN Stack with GraphQL",
            project_app_link: "https://woof-2021.herokuapp.com/",
            project_github_repo: "https://github.com/woof-board/woof",
        },
        {
            project_title: "Envoy Products",
            project_tag:"Handlebars/Express/NodeJS/MySQL",
            project_app_link: "https://envoy-guide.herokuapp.com/",
            project_github_repo: "https://github.com/Envoy-products/Envoy-Products",
        },
        {
            project_title: "NEF Contour Calc",
            project_tag:"React/NodeJS",
            project_app_link: "http://157.245.125.39:9000/",
            project_github_repo: "https://github.com/samiul1988/AVPA",
        },
        {
            project_title: "Barrier Estimator",
            project_tag:"React/Express/NodeJS",
            project_app_link: "https://www.patchingassociates.com/traffic-noise-barrier-tool/",
            project_github_repo: "https://github.com/samiul1988/CMHCApp",
        },
        {
            project_title: "Date Concierge",
            project_tag:"HTML/JS/CSS",
            project_app_link: "https://projectoneteamfour.github.io/date-concierge/",
            project_github_repo: "https://github.com/ProjectOneTeamFour/date-concierge",
        },
        {
            project_title: "Weather Dashboard",
            project_tag:"HTML/CSS/JS/jQuery",
            project_app_link: "https://samiul1988.github.io/assignment6_weather_dashboard/",
            project_github_repo: "https://github.com/samiul1988/assignment6_weather_dashboard",
        },
        // {
        //     project_title: "Run Buddy",
        //     project_tag:"HTML/CSS/Javascript",
        //     project_app_link: "https://samiul1988.github.io/run-buddy/",
        //     project_github_repo: "https://github.com/samiul1988/run-buddy-2",
        // }
    ]);

    return ( 
        <section className="container">
            <div>
                <h1>Portfolio</h1>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {/* Map through projectList array to populate individual Project item */}
                {
                    projectList.map((project,ind) => <Project key={`project_item_${ind}`} projectItem={{ index: ind, ...project }}/>)
                }
            </div>
        </section>
     );
}
 
export default Portfolio;