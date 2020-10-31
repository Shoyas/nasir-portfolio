import {React, useRef, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import './Services.css';
import logo1 from '../image/services/web-design.png';
import logo2 from '../image/services/web-developing.png';
import logo3 from '../image/services/seo.png';

import {TweenMax, Power3} from 'gsap';

const Services = () => {

    let content0 = useRef(null);
    let content1 = useRef(null);
    let content2 = useRef(null);
    let content3 = useRef(null);

    useEffect(() => {
        TweenMax.to(
            content0,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }

        )
        TweenMax.to(
            content1,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }

        )
        TweenMax.to(
            content2,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }

        )
        TweenMax.to(
            content3,
            .8,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }

        )
    }, [])

    return (
        <section style={{marginBottom: '30px'}}>
            <div ref={el => {content0 = el}} className="services-container">
                <h3 className="service-heading">SERVICES</h3>
            </div>
            <div className="row card-padding">
                <div className="col-md-4">
                    <Card ref={el => {content1 = el}} className="card-main">
                        <Card.Img className="card-image" src={logo1} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>Web Design</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail" style={{'textAlign': 'center'}}>
                            I'll design your web site with HTML5, CSS3, SCSS, Bootstrap, React, Metarial-UI, React-spring, and etc. Unlimited times free revisions until delivering to you. 
                            </Card.Text>
                        </Card.Body>
                    </Card>        
                </div>
                <div className="col-md-4">
                    <Card ref={el => {content2 = el}} className="card-main">
                        <Card.Img className="card-image" src={logo2} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>Web Development</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail" style={{'textAlign': 'center'}}>
                            I'll develop your web site with MongoDB, NodeJS, Netlify, Firebase, Heroku, Git, and etc.  Unlimited times free revisions until delivering to you.
                            </Card.Text>
                        </Card.Body>
                    </Card>  

                </div>
                <div className="col-md-4">
                    <Card ref={el => {content3 = el}} className="card-main">
                        <Card.Img className="card-image" src={logo3} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>SEO</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail" style={{'textAlign': 'center'}}>
                            SEO related details coming soon.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </div>
            </div>

        </section>

    );
};

export default Services;