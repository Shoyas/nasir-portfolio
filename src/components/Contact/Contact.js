import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_template', e.target, 'user_mEf0LGwwYej8BePukmSej')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <section className="contact-container">
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control line-border" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="email" className="form-control line-border" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="text" className="form-control line-border" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <textarea className="form-control line-border" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <button type="submit" class="btn btn-outline-primary button-position">Send Message</button>
                    </div>

                </div>
                
            </form>
        </section>
    );
};

export default Contact;