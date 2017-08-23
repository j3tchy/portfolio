import React, { Component } from 'react';

import ProjectsAPI from '../utils/ProjectsAPI';

class Project extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }

    render() {
        const project = ProjectsAPI.get(parseInt(this.props.match.params.id));
        const projectTags = project.tags;

        return (
            <div className="projects">
                <div className={"projects__header " + project.slug}>
                    <h1>{project.title}</h1>
                </div>
                <div className="container__wrapper">
                    <ul className="project__tags">
                        {
                            projectTags.map(function(tag) {
                                return (
                                    <li key={tag} className="project__tag">{tag}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="projects__summary">
                        <p>{project.summary}</p>
                    </div>
                </div>
                <div className="projects__image">
                    <div className="container__wrapper">
                        <div className="project__desktop">
                            <div className="project__toolbar">
                                <div className="project__toolbar-options">
                                    <span className="project__toolbar-circle project__toolbar-circle--red"></span>
                                    <span className="project__toolbar-circle project__toolbar-circle--yellow"></span>
                                    <span className="project__toolbar-circle project__toolbar-circle--green"></span>
                                </div>
                                <div className="project__toolbar-address-bar">
                                    <span>http://www.jetchy.co.uk/blog</span>
                                </div>
                            </div>
                            <div className="project__desktop-screen">
                                <img src={require('../assets/images/' + project.websiteImg)} alt={project.title} className="website-img img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;
