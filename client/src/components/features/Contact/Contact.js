import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../Contact/Contact.scss';

class Contact extends React.Component {
    render() {
        return(
            <div className="section container-fluid">
                <SectionTitle>Kontakt</SectionTitle>
                <div className="contact">
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
                </div>
            </div>
        );
    }
};

export default Contact;