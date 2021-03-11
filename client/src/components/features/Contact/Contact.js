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
            <div className="section">
                <SectionTitle>Kontakt</SectionTitle>
                <div className="section-bg contact position-relative">
                    <div className="row">
                        <div className="address col-md-4 d-flex justify-content-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icons"/>
                            <div className="ml-3 text-left justify-content-center">
                                <h4>Lokalizacja:</h4>
                                <p>Zawiercie, woj. śląskie</p>
                            </div>
                        </div>
                        <div className="email col-md-4 d-flex justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                            <div className="ml-3 text-left">
                                <h4>Email:</h4>
                                <p>pawlikanna24@gmail.com</p>
                            </div>
                        </div>
                        <div className="phone col-md-4 d-flex justify-content-center">
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