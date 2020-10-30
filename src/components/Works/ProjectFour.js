import React from 'react';
import work4 from '../image/works/e-school-bootstrap-responsive.png'

const ProjectFour = () => {
    return (
        <div className="projectTwo-container row d-flex works-margin">
            <div className="col-md-5 offset-md-1">
                

                <h3>E- School</h3>
                <h4>- A online school's design</h4>
                <h5>Features:</h5>
                <ul>
                    <li>It's a design site for any school & college.</li>
                    <li>An organization like school can use this type of design for their institution.</li>
                    <li>This design is very natural but effective.</li>
                    <li>Students can select his/her weakness subject & remove their weakness.</li>
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
                <a href="https://shoyas.github.io/e-school/" target="blank">https://shoyas.github.io/e-school/</a>
                <h4>GitHub Repository Link</h4>
                <a href="https://github.com/Shoyas/e-school" target="blank">https://github.com/Shoyas/e-school</a>
                

            </div>
            <div className="col-md-5 offset-md-1">
                
                <img className="work-img" src={work4} alt=""/>
            </div>
        </div>
    );
};

export default ProjectFour;