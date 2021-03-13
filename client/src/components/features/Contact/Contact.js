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
            <div className="section" id="contact">
                <SectionTitle>Kontakt</SectionTitle>
                <div className="section-bg contact position-relative" >
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="address px-1 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icons"/>
                            <div className="ml-3 text-left">
                                <h4>Lokalizacja:</h4>
                                <p>Zawiercie, woj. śląskie</p>
                            </div>
                        </div>
                        <div className="email px-1 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                            <div className="ml-3 text-left ">
                                <h4>Email:</h4>
                                <p>pawlikanna24@gmail.com</p>
                            </div>
                        </div>
                        <div className="phone px-1 d-flex justify-content-start align-items-center">
                            <FontAwesomeIcon icon={faPhoneAlt} className="icons"/>
                            <div className="ml-3 text-left">
                                <h4>Telefon:</h4>
                                <p>+48 507 102 268</p>
                            </div>
                        </div>
                    </div>
                    <div className="reserved text-center">
                        <p className="mt-5">© 2021 Anna Pawlik</p>
                    </div>
                    <button onClick={() => this.handleScroll()} className="back-to-top">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>
        );
    }
};

export default Contact;