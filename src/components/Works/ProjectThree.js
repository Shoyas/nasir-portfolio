import React from 'react';
import work3 from '../image/works/online-class.png';
import './Works.css';

const ProjectThree = () => {
    return (
        <div className="projectOne-container row d-flex works-margin">
            <div className="col-md-5 offset-md-1">
                <img className="work-img" src={work3} alt=""/>
            </div>
            <div className="col-md-6">
                <h3>Online Class</h3>
                <h4>- A site for teaching</h4>
                <h5>Features:</h5>
                <ul>
                    <li>It’s a simple teaching site where a person can learn about programming.</li>
                    <li>A user have to enroll on his/her interested topics.</li>
                    <li>Person can see his/her enrolled items.</li>
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
                            <li>ReST API</li>
                            <li>Node.JS</li>
                            <li>Git</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
                <h4>Live Site Link:</h4>
                <a href="https://stoic-kepler-71f9e4.netlify.app/" target="blank">https://stoic-kepler-71f9e4.netlify.app/</a>
                <h4>GitHub Repository Link</h4>
                <a href="https://github.com/Shoyas/social-buddy" target="blank">https://github.com/Shoyas/social-buddy</a>
                
            </div>
        </div>
    );
};

export default ProjectThree;