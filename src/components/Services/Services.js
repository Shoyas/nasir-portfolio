import React from 'react';
import { Card } from 'react-bootstrap';
import './Services.css';
import logo1 from '../image/services/web-design.png';
import logo2 from '../image/services/web-developing.png';
import logo3 from '../image/services/seo.png';

const Services = () => {
    return (
        <section style={{marginBottom: '30px'}}>
            <div className="services-container">
                <h3 style={{'textAlign': 'center', 'color': '#007BFF'}}>SERVICES</h3>
            </div>
            <div className="row card-padding">
                <div className="col-md-4">
                    <Card style={{ width: '18rem', 'border': '1px solid #007BFF'}}>
                        <Card.Img style={{"height": "50px", "width": "50px", "margin": "15px auto"}} src={logo1} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>Web Design</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>        
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem', 'border': '1px solid #007BFF' }}>
                        <Card.Img style={{"height": "50px", "width": "50px", "margin": "15px auto"}} src={logo2} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>Web Development</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>  

                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem', 'border': '1px solid #007BFF' }}>
                        <Card.Img style={{"height": "50px", "width": "50px", "margin": "15px auto"}} src={logo3} />
                        <Card.Body>
                            <Card.Title style={{'textAlign': 'center'}}>SEO</Card.Title>
                            <div className="card-name"></div>
                            <Card.Text className="card-detail">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </div>
            </div>

        </section>

    );
};

export default Services;