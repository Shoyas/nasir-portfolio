import React from 'react';
import work5 from '../image/works/Hot-gadget.png';

const ProjectFive = () => {
    return (
        <div className="projectTwo-container row d-flex works-margin">
            <div className="col-md-5 offset-md-1">
                <img className="work-img" src={work5} alt=""/>
            </div>
            <div className="col-md-6">
                <h3>Hot Gadget</h3>
                <h4>- A online shop's design</h4>
                <h5>Features:</h5>
                <ul>
                    <li>It's a design site for any online shopping.</li>
                    <li>An owner can design this type of site of his online shop.</li>
                    <li>The customers can buy easily from this site for the design style.</li>
                </ul>
                <br/>
                <h5>Technologies:</h5>
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    
                </div>
                <h4>Live Site Link:</h4>
                <a href="https://shoyas.github.io/hot-gadgets/" target="blank">https://shoyas.github.io/hot-gadgets/</a>
                <h4>GitHub Repository Link</h4>
                <a href="https://github.com/Shoyas/hot-gadgets" target="blank">https://github.com/Shoyas/hot-gadgets</a>
                

            </div>
        </div>
    );
};

export default ProjectFive;