import React from 'react';
import work2 from '../image/works/volunteer-network.jpg';
import './Works.css';

const ProjectTwo = () => {
    return (
        <section className="container-fluid">
            <div className="projectTwo-container row d-flex works-margin">
                <div className="col-md-5 offset-md-1">
                    <h3>Volunteer Network </h3>
                    <h4>- Volunteer collection site</h4>
                    <h5>Features:</h5>
                    <ul>
                        <li>A person can choose his favorite side for volunteering task.</li>
                        <li>A person have to registered member for working.</li>
                        <li>This side is forced to register any person by it's Private Route system.</li>
                        <li>A registered person can watch his all activities.</li>
                        <li>He can also give feedback.</li>
                    </ul>
                    <br/>
                    <h5>Technologies:</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>ES6</li>
                                <li>React.JS</li>

                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>React-Bootstrap</li>
                                <li>Metarial-UI</li>
                                <li>MongoDB</li>
                                <li>ReST API</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>Node.JS</li>
                                <li>Firebase</li>
                                <li>Git</li>
                                <li>Heroku</li>
                            </ul>
                        </div>

                    </div>
                    <h4>Live Site Link:</h4>
                    <a href="https://volunteer-network-b909d.web.app/" target="blank">https://volunteer-network-b909d.web.app/</a>
                    <h4>GitHub Repository Link</h4>
                    <a href="https://github.com/Shoyas/volunteer-network" target="blank">https://github.com/Shoyas/volunteer-network</a>
                </div>
                <div className=" col-md-5 offset-md-1">
                    
                    
                    <img className="work-img" src={work2} alt=""/>

                </div>
            </div>
        </section>
    );
};

export default ProjectTwo;