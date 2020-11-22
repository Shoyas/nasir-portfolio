import {React, useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../image/Shoyas.jpg';
import './Intro.css';

import {TweenMax, Power3} from 'gsap';

const Intro = () => {
    let personalPhoto = useRef(null);
    let content = useRef(null);


    useEffect(() => {
        TweenMax.to(
            personalPhoto,
            .8,
            {
                opacity: 1,
                x: 20,
                ease: Power3.easeOut
            }

        )
        TweenMax.to(
            content,
            .8,
            {
                opacity: 1,
                x: -20,
                ease: Power3.easeOut
            }

        )
    }, [])

    return (
        <section className="container-fluid">
            <div className="intro-container row">
                <div className="col-md-6 personal-photo">
                    <img ref={el => {personalPhoto = el}} src={photo} alt=""/>
                </div>

                <div ref={el => {content = el}} className="col-md-6 personal-intro">
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
        </section>
    );
};

export default Intro;