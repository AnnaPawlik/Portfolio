import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../Contact/Contact.scss';

class Contact extends React.Component {
       
    handleScroll() {
        
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return(
            <footer className="section container-fluid" id="contact">
                <div className="content content-wrapper ">
                    <SectionTitle>Kontakt</SectionTitle>
                </div>
                <div className="footer container mt-5 d-flex flex-wrap justify-content-center">
                        <div className="footer-icons px-5 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icons"/>
                            <div className="ml-3 text-left">
                                <h5>Lokalizacja:</h5>
                                <p>Zawiercie, woj. śląskie</p>
                            </div>
                        </div>
                        <div className="footer-icons px-5 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                            <div className="ml-3 text-left ">
                                <h5>Email:</h5>
                                <p>pawlikanna24@gmail.com</p>
                            </div>
                        </div>
                        <div className="footer-icons px-5 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="icons"/>
                            <div className="ml-3 text-left">
                                <h5>Telefon:</h5>
                                <p>+48 507 102 268</p>
                            </div>
                        </div>
                    </div>                      
                    <button onClick={() => this.handleScroll()} className="back-to-top">
                            <FontAwesomeIcon icon={faArrowUp} />
                    </button>
            </footer>           
        );
    }
};

export default Contact;