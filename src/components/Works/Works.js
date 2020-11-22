import React from 'react';
import ProjectFive from './ProjectFive';
import ProjectFour from './ProjectFour';
import ProjectOne from './ProjectOne';
import ProjectSeven from './ProjectSeven';
import ProjectSix from './ProjectSix';
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
            <ProjectSix></ProjectSix>
            <ProjectSeven></ProjectSeven>
        </section>
    );
};

export default Works;