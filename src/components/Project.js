import React from 'react';

// Reusable Project Component
const Project = ({ projectItem }) => {
    return (
        <article className={`project-item-card m-4 item-${projectItem.index}`}>
            <div className="project-item-card__div">
                <div className="d-flex justify-content-start p-2">
                    <div className="mx-2 project-title">
                        <a
                            href={projectItem.project_app_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>{projectItem.project_title}</h4>
                        </a>
                    </div>
                    <div className="mx-2 project-link">
                        <a
                            href={projectItem.project_github_repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-2x fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="mx-2 p-2">
                    <p>{projectItem.project_tag}</p>
                </div>
            </div>
        </article>
    );
}

export default Project;