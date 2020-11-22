import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';


const Footer = () => {
    return (
        <section className="Footer-container">
            <div className="d-flex justify-content-around fa-3x">
                <a href="https://www.linkedin.com/in/md-nasir-uddin-b4aa551b1/" target="blank">
                    <FontAwesomeIcon className="icon-size" icon={faLinkedinIn} />
                </a>
                <a href="https://mail.google.com/mail/" target="blank">
                    <FontAwesomeIcon className="icon-size" icon={faMailBulk} />
                </a>
                <a href="https://github.com/Shoyas?tab=repositories" target="blank">
                    <FontAwesomeIcon className="icon-size" icon={faGithub} />
                </a>
            </div>
            <div className="copyRight text-center pt-5">
                <small>Copyright @ All Rights Reserved {(new Date()).getFullYear()}</small>
            </div>
        </section>
    );
};

export default Footer;