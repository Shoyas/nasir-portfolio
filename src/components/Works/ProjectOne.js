import React from 'react';
import work1 from '../image/works/creative-agency.jpg';
import './Works.css';

const ProjectOne = () => {
    return (
        <section className="container-fluid">
            <div className="projectOne-container row d-flex works-margin">
                <div className="col-md-5 offset-md-1">
                    <img className="work-img" src={work1} alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>Creative Agency</h3>
                    <h4>- A online service provides site</h4>
                    <h5>Features:</h5>
                    <ul>
                        <li>This site has two portions, the Client panel, and the Admin panel.</li>
                        <li>Clients can give their feedback, orders but they can't access the sensitive area of this site.</li>
                        <li>Clients can watch their all given orders in a list.</li>
                        <li>The admin can access all areas.</li>
                        <li>The admin can watch all client's orders in a list.</li>
                        <li>The admin can change the orders delivery status.</li>
                        <li>The admin can make other as an admin.</li>
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
                                <li>Bootstrap</li>
                                <li>React-Spring</li>
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
                    <a href="https://creative-agency-client-924ea.web.app" target="blank">https://creative-agency-client-924ea.web.app</a>
                    <h4>GitHub Repository Link</h4>
                    <a href="https://github.com/Shoyas/creative-agency-client" target="blank">https://github.com/Shoyas/creative-agency-client</a>
                    
                </div>
            </div>
        </section>
    );
};

export default ProjectOne;