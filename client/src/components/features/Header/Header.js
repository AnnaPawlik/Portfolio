import React from 'react';
import '../Header/Header.scss';
import Navbar from '../../features/Navbar/Navbar';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Header extends React.Component {
    render() {
        return(
            <div className="header container-fluid">
                <Navbar />
                <div className="header-title">
                    <p>Anna Pawlik</p>
                    <p className="subtitle">Junior Front-End Developer</p>
                    <div className="social-links">
                        <Link to={{ pathname: "https://github.com/AnnaPawlik"}} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/anna-pawlik-279509183/"}} target="_blank" >
                            <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default Header;