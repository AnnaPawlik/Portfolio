import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faYarn } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import tailwindcssIcon from '@iconify-icons/logos/tailwindcss-icon';
import '../Technology/Technology.scss';

class Technology extends React.Component {
    render() {
        return(
            <div className="container">
                <SectionTitle>Technologie</SectionTitle>
                <div className="skills-stack">
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faHtml5} className="icons html"/>
                            <span className="icons-title">HTML5</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faCss3} className="icons css"/>
                            <span className="icons-title">CSS3</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faSass} className="icons sass"/>
                            <span className="icons-title">Sass</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faBootstrap} className="icons bootstrap"/>
                            <span className="icons-title">Bootstrap</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Icon icon={tailwindcssIcon} className="icons"/>
                            <span className="icons-title">Tailwind CSS</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faJs} className="icons js"/>
                            <span className="icons-title">Javascript</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faReact} className="icons react"/>
                            <span className="icons-title">React + Redux</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faNodeJs} className="icons node"/>
                            <span className="icons-title">Node.js</span>
                        </div>
                    </div>
                    <div className="row">                      
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faDatabase} className="icons mongo"/>
                            <span className="icons-title">MongoDB</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faGitAlt} className="icons git"/>
                            <span className="icons-title">Git</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faNpm} className="icons npm"/>
                            <span className="icons-title">NPM</span>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faYarn} className="icons yarn"/>
                            <span className="icons-title">YARN</span>
                        </div>
                    </div>                   
                </div>
            </div>
        );
    }
};

export default Technology;