import React from 'react';
import picSeven from '../image/works/powerx-1.jpg';

const ProjectSeven = () => {
    return (
        <section className="container-fluid">
            <div className="projectTwo-container row d-flex works-margin">
                <div className="col-md-5 offset-md-1">
                    <img className="work-img" src={picSeven} alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>Power-X-Gym</h3>
                    <h4>- A design of gym site</h4>
                    <h5>It's a team work for gather team-working experiences</h5>
                    <h5>Features:</h5>
                    <ul>
                        <li>It's a site for providing online gym related services.</li>
                        <li>A client can choose his favorite workout.</li>
                        <li>A client can know his class time updated.</li>
                    </ul>
                    <br/>
                    <h5>Technologies:</h5>
                    <div className="row">
                        <div className="col-md-4">
                            <ul>
                                <li>React</li>
                                <li>Node.JS</li>
                                <li>ES6</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>Git</li>
                                <li>Netlify</li>

                            </ul>
                        </div>
                        
                    </div>
                    <h4>Live Site Link:</h4>
                    <a href="https://power-x-gym-by-team71.netlify.app/" target="blank">https://power-x-gym-by-team71.netlify.app/</a>
                    <h4>GitHub Client-site Repository Link</h4>
                    <a href="https://github.com/subreena/power-x-gym-team71" target="blank">https://github.com/subreena/power-x-gym-team71</a>
                    <h4>GitHub Server-site Repository Link</h4>
                    <a href="https://github.com/Shoyas/power-x-server" target="blank">https://github.com/Shoyas/power-x-server</a>
                    

                </div>
            </div>

        </section>
    );
};

export default ProjectSeven;