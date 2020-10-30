import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../image/Shoyas.jpg';
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro-container row">
            <div className="col-md-6 personal-photo">
                <img src={photo} alt=""/>
            </div>

            <div className="col-md-6 personal-intro">
                <h3>Hello, I'm Nasir</h3>
                <h1>Expert in Web<br/>
                    Design<br/>
                    & <br/>
                    Development
                </h1>
                <p style={{'padding-right':'40px'}}>Experienced web developer adept in all stages of advanced web development. Knowledgeable in a user interface, testing, and debugging processes. Equipped with a diverse and programming skill-set. Able to effectively self manage during independent projects, as well as collaborate in a team setting.</p>
                <br/>
                <NavLink className='nav-link' to='/works'>
                    <button type="button" class="btn btn-outline-primary">See My Work</button>
                </NavLink>
                

            </div>
        </div>
    );
};

export default Intro;