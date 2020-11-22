import React from 'react';
import picSix from '../image/works/Web.jpg';

const ProjectSix = () => {
    return (
        <section className="container-fluid">
            <div className="projectTwo-container row d-flex works-margin">
                
                <div className="col-md-5 offset-md-1">
                    <h3>Athena Design</h3>
                    <h4>- A design of providing online services site</h4>
                    <h5>It's a team work for gather team-working experiences</h5>
                    <h5>Features:</h5>
                    <ul>
                        <li>It's a design site for providing online services site.</li>
                        <li>An owner can design this type of site of his services site.</li>
                        <li>The customers can buy easily from this site for the design style.</li>
                        <li><strong>Full Responsive site for all devices</strong></li>
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
                    <a href="https://athena-design-with-team-71.netlify.app/" target="blank">https://athena-design-with-team-71.netlify.app/</a>
                    <h4>GitHub Repository Link</h4>
                    <a href="https://github.com/Shoyas/athena-design" target="blank">https://github.com/Shoyas/athena-design</a>
                    

                </div>

                <div className="col-md-5 offset-md-1">
                    <img className="work-img" src={picSix} alt=""/>
                </div>

            </div>

        </section>
    );
};

export default ProjectSix;