import React from 'react';
import Intro from '../Intro/Intro';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className="header-container">
            <Navigation></Navigation>
            <Intro></Intro>
        </div>
    );
};

export default Header;