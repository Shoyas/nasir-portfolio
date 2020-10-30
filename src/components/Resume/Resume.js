import React from 'react';
import cvPage1 from '../image/cv-image/nasir-cv-one.png';
import cvPage2 from '../image/cv-image/nasir-cv-two.png';
import './Resume.css'

const Resume = () => {
    return (
        <section className="row d-flex resume-container">
            <div className="col-md-9 text-center">
                <img src={cvPage1} alt=""/>
                <img src={cvPage2} alt=""/>
            </div>
            <div className="col-md-3 text-style">
                <button type="button" class="btn btn-outline-primary"><a className="dwn-resume" href="https://drive.google.com/file/d/11zuE9MGq8bhHl1VbbFPTYHSzZtN966NL/view?usp=sharing" target="blank">Download Resume</a></button>
            </div>
        </section>
    );
};

export default Resume;