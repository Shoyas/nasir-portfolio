import React from 'react';
import ProjectFive from './ProjectFive';
import ProjectFour from './ProjectFour';
import ProjectOne from './ProjectOne';
import ProjectThree from './ProjectThree';
import ProjectTwo from './ProjectTwo';
import './Works.css';

const Works = () => {
    return (
        <section className="works-container">
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <ProjectThree></ProjectThree>
            <ProjectFour></ProjectFour>
            <ProjectFive></ProjectFive>
        </section>
    );
};

export default Works;